// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, virtual } from '@feathersjs/schema';
import { Type, getValidator, querySyntax } from '@feathersjs/typebox';
import { ObjectIdSchema } from '@feathersjs/typebox';
import type { Static } from '@feathersjs/typebox';

import type { HookContext } from '../../declarations';
import { dataValidator, queryValidator } from '../../validators';

import { categorySchema } from '../categories/categories.schema';

// Main data model schema
export const itemSchema = Type.Object(
  {
    _id: ObjectIdSchema(),
    name: Type.String(),
    categoryId: ObjectIdSchema(),
    category: Type.Ref(categorySchema),
    price: Type.Number(), // in pence
    stockRemaining: Type.Number(),
    imageURL: Type.String(),
  },
  { $id: 'Item', additionalProperties: false },
);
export type Item = Static<typeof itemSchema>;
export const itemValidator = getValidator(itemSchema, dataValidator);
export const itemResolver = resolve<Item, HookContext>({
  // Associate the category the item belongs to
  category: virtual(async (item, context) => {
    return context.app.service('categories').get(item.categoryId as any);
  }),
});

export const itemExternalResolver = resolve<Item, HookContext>({
  imageURL: async (value, item, context) => {
    return 'images/' + value;
  },
  // API consumers don't need to see categoryId if category is populated
  categoryId: async (value, user, context) => undefined,
});

// Schema for creating new entries
export const itemDataSchema = Type.Pick(
  itemSchema,
  ['name', 'categoryId', 'price', 'stockRemaining', 'imageURL'],
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
  'categoryId',
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
