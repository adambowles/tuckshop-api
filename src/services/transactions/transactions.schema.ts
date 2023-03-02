// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema';
import { Type, getValidator, querySyntax } from '@feathersjs/typebox';
import { ObjectIdSchema } from '@feathersjs/typebox';
import type { Static } from '@feathersjs/typebox';

import type { HookContext } from '../../declarations';
import { dataValidator, queryValidator } from '../../validators';

// Main data model schema
export const transactionSchema = Type.Object(
  {
    _id: ObjectIdSchema(),
    user: ObjectIdSchema(),
    //TODO figure this out
    items: Type.Array(
      Type.Object({
        item: ObjectIdSchema(),
        quantity: Type.Number(),
      }),
    ),
  },
  { $id: 'Transaction', additionalProperties: false },
);
export type Transaction = Static<typeof transactionSchema>;
export const transactionValidator = getValidator(
  transactionSchema,
  dataValidator,
);
export const transactionResolver = resolve<Transaction, HookContext>({});

export const transactionExternalResolver = resolve<Transaction, HookContext>(
  {},
);

// Schema for creating new entries
export const transactionDataSchema = Type.Pick(transactionSchema, ['user'], {
  $id: 'TransactionData',
});
export type TransactionData = Static<typeof transactionDataSchema>;
export const transactionDataValidator = getValidator(
  transactionDataSchema,
  dataValidator,
);
export const transactionDataResolver = resolve<Transaction, HookContext>({});

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
  'user',
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
