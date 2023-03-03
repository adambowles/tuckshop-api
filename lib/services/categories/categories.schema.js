"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryQueryResolver = exports.categoryQueryValidator = exports.categoryQuerySchema = exports.categoryQueryProperties = exports.categoryPatchResolver = exports.categoryPatchValidator = exports.categoryPatchSchema = exports.categoryDataResolver = exports.categoryDataValidator = exports.categoryDataSchema = exports.categoryExternalResolver = exports.categoryResolver = exports.categoryValidator = exports.categorySchema = void 0;
// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const typebox_2 = require("@feathersjs/typebox");
const validators_1 = require("../../validators");
// Main data model schema
exports.categorySchema = typebox_1.Type.Object({
    _id: (0, typebox_2.ObjectIdSchema)(),
    name: typebox_1.Type.String(),
}, { $id: 'Category', additionalProperties: false });
exports.categoryValidator = (0, typebox_1.getValidator)(exports.categorySchema, validators_1.dataValidator);
exports.categoryResolver = (0, schema_1.resolve)({});
exports.categoryExternalResolver = (0, schema_1.resolve)({});
// Schema for creating new entries
exports.categoryDataSchema = typebox_1.Type.Pick(exports.categorySchema, ['name'], {
    $id: 'CategoryData',
});
exports.categoryDataValidator = (0, typebox_1.getValidator)(exports.categoryDataSchema, validators_1.dataValidator);
exports.categoryDataResolver = (0, schema_1.resolve)({});
// Schema for updating existing entries
exports.categoryPatchSchema = typebox_1.Type.Partial(exports.categorySchema, {
    $id: 'CategoryPatch',
});
exports.categoryPatchValidator = (0, typebox_1.getValidator)(exports.categoryPatchSchema, validators_1.dataValidator);
exports.categoryPatchResolver = (0, schema_1.resolve)({});
// Schema for allowed query properties
exports.categoryQueryProperties = typebox_1.Type.Pick(exports.categorySchema, [
    '_id',
    'name',
]);
exports.categoryQuerySchema = typebox_1.Type.Intersect([
    (0, typebox_1.querySyntax)(exports.categoryQueryProperties),
    // Add additional query properties here
    typebox_1.Type.Object({}, { additionalProperties: false }),
], { additionalProperties: false });
exports.categoryQueryValidator = (0, typebox_1.getValidator)(exports.categoryQuerySchema, validators_1.queryValidator);
exports.categoryQueryResolver = (0, schema_1.resolve)({});
