// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema';
import { Type, getValidator, querySyntax } from '@feathersjs/typebox';
import { ObjectIdSchema } from '@feathersjs/typebox';
import type { Static } from '@feathersjs/typebox';

import type { HookContext } from '../../declarations';
import { dataValidator, queryValidator } from '../../validators';

// Main data model schema
export const userSchema = Type.Object(
  {
    _id: ObjectIdSchema(), // service number
    name: Type.String(),
    rank: Type.String(),
    number: Type.String(),
  },
  { $id: 'User', additionalProperties: false },
);
export type User = Static<typeof userSchema>;
export const userValidator = getValidator(userSchema, dataValidator);
export const userResolver = resolve<User, HookContext>({});

export const userExternalResolver = resolve<User, HookContext>({});

// Schema for creating new entries
export const userDataSchema = Type.Pick(
  userSchema,
  ['name', 'rank', 'number'],
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
