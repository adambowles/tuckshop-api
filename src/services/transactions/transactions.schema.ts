// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, virtual } from '@feathersjs/schema';
import { Type, getValidator, querySyntax } from '@feathersjs/typebox';
import { ObjectIdSchema } from '@feathersjs/typebox';
import type { Static } from '@feathersjs/typebox';

import type { HookContext } from '../../declarations';
import { dataValidator, queryValidator } from '../../validators';

import { userSchema } from '../users/users.schema';

// Main data model schema
export const transactionSchema = Type.Object(
  {
    _id: ObjectIdSchema(),
    createdAt: Type.Number(),
    userId: ObjectIdSchema(),
    user: Type.Ref(userSchema),
    // TODO
    items: Type.Array(
      Type.Object({
        itemId: ObjectIdSchema(),
        quantity: Type.Number(),
      }),
    ),
    settled: Type.Boolean(), // Whether this transaction has been paid
  },
  { $id: 'Transaction', additionalProperties: false },
);
export type Transaction = Static<typeof transactionSchema>;
export const transactionValidator = getValidator(
  transactionSchema,
  dataValidator,
);
export const transactionResolver = resolve<Transaction, HookContext>({
  // Associate the user that made the transaction
  user: virtual(async (transaction: Transaction, context: HookContext) => {
    // TODO I hate using `any`
    return context.app.service('users').get(transaction.userId as any);
  }),
  // Populate the items
  items: virtual(async (transaction: Transaction, context: HookContext) => {
    const itemIds = (transaction.items || []).map((item) => item.itemId);

    if (!itemIds.length) {
      return undefined;
    }

    const items = await context.app.service('items').find({
      paginate: false,
      query: {
        _id: {
          $in: itemIds,
        },
      },
    });

    return items.map((item) => {
      const foundItem = transaction.items.find(
        (tItem) => String(item._id) === String(tItem.itemId),
      );

      const quantity = foundItem?.quantity;

      return {
        item: item,
        quantity,
      };
    });
  }),
} as any);

export const transactionExternalResolver = resolve<Transaction, HookContext>({
  // API consumers don't need to see userId if user is populated
  userId: async (value, user, context) => undefined,
});

// Schema for creating new entries
export const transactionDataSchema = Type.Pick(
  transactionSchema,
  ['userId', 'items', 'settled'],
  {
    $id: 'TransactionData',
  },
);
export type TransactionData = Static<typeof transactionDataSchema>;
export const transactionDataValidator = getValidator(
  transactionDataSchema,
  dataValidator,
);
export const transactionDataResolver = resolve<Transaction, HookContext>({
  createdAt: async () => {
    return Date.now();
  },
});

// Schema for updating existing entries
export const transactionPatchSchema = Type.Partial(transactionSchema, {
  $id: 'TransactionPatch',
});
export type TransactionPatch = Static<typeof transactionPatchSchema>;
export const transactionPatchValidator = getValidator(
  transactionPatchSchema,
  dataValidator,
);
export const transactionPatchResolver = resolve<Transaction, HookContext>({});

// Schema for allowed query properties
export const transactionQueryProperties = Type.Pick(transactionSchema, [
  '_id',
  'userId',
  'settled',
]);
export const transactionQuerySchema = Type.Intersect(
  [
    querySyntax(transactionQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false }),
  ],
  { additionalProperties: false },
);
export type TransactionQuery = Static<typeof transactionQuerySchema>;
export const transactionQueryValidator = getValidator(
  transactionQuerySchema,
  queryValidator,
);
export const transactionQueryResolver = resolve<TransactionQuery, HookContext>(
  {},
);
