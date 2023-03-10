// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, virtual } from '@feathersjs/schema';
import { Type, getValidator, querySyntax } from '@feathersjs/typebox';
import { ObjectIdSchema } from '@feathersjs/typebox';
import type { Static } from '@feathersjs/typebox';

import type { HookContext } from '../../declarations';
import { dataValidator, queryValidator } from '../../validators';

import { userSchema } from '../users/users.schema';
// import { itemSchema } from '../items/items.schema';

// Main data model schema
export const transactionSchema = Type.Object(
  {
    _id: ObjectIdSchema(),
    createdAt: Type.Number(),
    userId: ObjectIdSchema(),
    user: Type.Ref(userSchema),
    // TODO
    // items: Type.Array(
    //   Type.Object({
    //     itemId: itemSchema,
    //     quanitity: Type.Number(),
    //   }),
    // ),
  },
  { $id: 'Transaction', additionalProperties: false },
);
export type Transaction = Static<typeof transactionSchema>;
export const transactionValidator = getValidator(
  transactionSchema,
  dataValidator,
);
export const transactionResolver = resolve<Transaction, HookContext>({
  user: virtual(async (transaction, context) => {
    // Associate the user that made the transaction
    // TODO I hate using `any`
    return context.app.service('users').get(transaction.userId as any);
  }),
});

export const transactionExternalResolver = resolve<Transaction, HookContext>({
  userId: async (value, user, context) => undefined,
});

// Schema for creating new entries
export const transactionDataSchema = Type.Pick(transactionSchema, ['userId'], {
  $id: 'TransactionData',
});
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
