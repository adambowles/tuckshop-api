// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema';
import { Type, getValidator, querySyntax } from '@feathersjs/typebox';
import { ObjectIdSchema } from '@feathersjs/typebox';
import type { Static } from '@feathersjs/typebox';

import type { HookContext } from '../../declarations';
import { dataValidator, queryValidator } from '../../validators';

// Main data model schema
export const itemSchema = Type.Object(
  {
    _id: ObjectIdSchema(),
    name: Type.String(),
    price: Type.Number(), // in pence
    stockRemaining: Type.Number(),
  },
  { $id: 'Item', additionalProperties: false },
);
export type Item = Static<typeof itemSchema>;
export const itemValidator = getValidator(itemSchema, dataValidator);
export const itemResolver = resolve<Item, HookContext>({});

export const itemExternalResolver = resolve<Item, HookContext>({});

// Schema for creating new entries
export const itemDataSchema = Type.Pick(
  itemSchema,
  ['name', 'price', 'stockRemaining'],
  {
    $id: 'ItemData',
  },
);
export type ItemData = Static<typeof itemDataSchema>;
export const itemDataValidator = getValidator(itemDataSchema, dataValidator);
export const itemDataResolver = resolve<Item, HookContext>({});

// Schema for updating existing entries
export const itemPatchSchema = Type.Partial(itemSchema, {
  $id: 'ItemPatch',
});
export type ItemPatch = Static<typeof itemPatchSchema>;
export const itemPatchValidator = getValidator(itemPatchSchema, dataValidator);
export const itemPatchResolver = resolve<Item, HookContext>({});

// Schema for allowed query properties
export const itemQueryProperties = Type.Pick(itemSchema, [
  '_id',
  'name',
  'price',
  'stockRemaining',
]);
export const itemQuerySchema = Type.Intersect(
  [
    querySyntax(itemQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false }),
  ],
  { additionalProperties: false },
);
export type ItemQuery = Static<typeof itemQuerySchema>;
export const itemQueryValidator = getValidator(itemQuerySchema, queryValidator);
export const itemQueryResolver = resolve<ItemQuery, HookContext>({});
