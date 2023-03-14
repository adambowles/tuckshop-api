// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, virtual } from '@feathersjs/schema';
import { Type, getValidator, querySyntax } from '@feathersjs/typebox';
import { ObjectIdSchema } from '@feathersjs/typebox';
import type { Static } from '@feathersjs/typebox';

import type { HookContext } from '../../declarations';
import { dataValidator, queryValidator } from '../../validators';

// Main data model schema
export const userSchema = Type.Object(
  {
    _id: ObjectIdSchema(),
    name: Type.String(),
    rank: Type.String(),
    number: Type.String(), // service number
    department: Type.String(),
    servicePersonnel: Type.Boolean(),
    favourites: Type.Array(ObjectIdSchema()),
  },
  { $id: 'User', additionalProperties: false },
);
export type User = Static<typeof userSchema>;
export const userValidator = getValidator(userSchema, dataValidator);
export const userResolver = resolve<User, HookContext>({});

export const userExternalResolver = resolve<User, HookContext>({
  // Find user's most purchased items
  // This is pretty messy but SHOULD work 🤷
  favourites: virtual(async (user: User, context: HookContext) => {
    // context.params.provider is 'rest' when it's called via http, undefined
    // when internal
    if (context.params.provider) {
      const transactions = await context.app.service('transactions').find({
        paginate: false,
        query: {
          userId: user._id,
        },
      });

      const items = transactions.map((transaction) => transaction.items);

      let flatItems: (typeof items)[0] = [];
      items.forEach((item) => {
        flatItems = flatItems.concat(item);
      });

      if (flatItems[0] === undefined) {
        return [];
      }

      type Item = { itemId: string; quantity: number };

      const deduplicatedItems: any = {};

      flatItems.forEach((item) => {
        if (deduplicatedItems[item.itemId as string]) {
          // If it already exists, increment it
          deduplicatedItems[item.itemId as string] =
            deduplicatedItems[item.itemId as string] + item.quantity;
        } else {
          // Otherwise instantiate it
          deduplicatedItems[item.itemId as string] = item.quantity;
        }
      });

      let sortedItems: Array<Item> = [];
      Object.keys(deduplicatedItems).forEach((key) => {
        sortedItems = sortedItems.concat({
          itemId: key,
          quantity: deduplicatedItems[key],
        });
      });

      // Sort by most purchased quantity
      sortedItems.sort((a, b) => {
        return b.quantity - a.quantity;
      });

      // Return top 10
      return sortedItems.slice(0, 10);
    }
  }),
} as any);

// Schema for creating new entries
export const userDataSchema = Type.Pick(
  userSchema,
  ['name', 'rank', 'number', 'department', 'servicePersonnel'],
  {
    $id: 'UserData',
  },
);
export type UserData = Static<typeof userDataSchema>;
export const userDataValidator = getValidator(userDataSchema, dataValidator);
export const userDataResolver = resolve<User, HookContext>({});

// Schema for updating existing entries
export const userPatchSchema = Type.Partial(userSchema, {
  $id: 'UserPatch',
});
export type UserPatch = Static<typeof userPatchSchema>;
export const userPatchValidator = getValidator(userPatchSchema, dataValidator);
export const userPatchResolver = resolve<User, HookContext>({});

// Schema for allowed query properties
export const userQueryProperties = Type.Pick(userSchema, [
  '_id',
  'name',
  'rank',
  'number',
  'department',
  'servicePersonnel',
]);
export const userQuerySchema = Type.Intersect(
  [
    querySyntax(userQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false }),
  ],
  { additionalProperties: false },
);
export type UserQuery = Static<typeof userQuerySchema>;
export const userQueryValidator = getValidator(userQuerySchema, queryValidator);
export const userQueryResolver = resolve<UserQuery, HookContext>({});
