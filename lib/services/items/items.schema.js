"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemQueryResolver = exports.itemQueryValidator = exports.itemQuerySchema = exports.itemQueryProperties = exports.itemPatchResolver = exports.itemPatchValidator = exports.itemPatchSchema = exports.itemDataResolver = exports.itemDataValidator = exports.itemDataSchema = exports.itemExternalResolver = exports.itemResolver = exports.itemValidator = exports.itemSchema = void 0;
// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const typebox_2 = require("@feathersjs/typebox");
const validators_1 = require("../../validators");
// Main data model schema
exports.itemSchema = typebox_1.Type.Object({
    _id: (0, typebox_2.ObjectIdSchema)(),
    name: typebox_1.Type.String(),
    category: (0, typebox_2.ObjectIdSchema)(),
    price: typebox_1.Type.Number(),
    stockRemaining: typebox_1.Type.Number(),
}, { $id: 'Item', additionalProperties: false });
exports.itemValidator = (0, typebox_1.getValidator)(exports.itemSchema, validators_1.dataValidator);
exports.itemResolver = (0, schema_1.resolve)({});
exports.itemExternalResolver = (0, schema_1.resolve)({});
// Schema for creating new entries
exports.itemDataSchema = typebox_1.Type.Pick(exports.itemSchema, ['name', 'category', 'price', 'stockRemaining'], {
    $id: 'ItemData',
});
exports.itemDataValidator = (0, typebox_1.getValidator)(exports.itemDataSchema, validators_1.dataValidator);
exports.itemDataResolver = (0, schema_1.resolve)({});
// Schema for updating existing entries
exports.itemPatchSchema = typebox_1.Type.Partial(exports.itemSchema, {
    $id: 'ItemPatch',
});
exports.itemPatchValidator = (0, typebox_1.getValidator)(exports.itemPatchSchema, validators_1.dataValidator);
exports.itemPatchResolver = (0, schema_1.resolve)({});
// Schema for allowed query properties
exports.itemQueryProperties = typebox_1.Type.Pick(exports.itemSchema, [
    '_id',
    'name',
    'category',
    'price',
    'stockRemaining',
]);
exports.itemQuerySchema = typebox_1.Type.Intersect([
    (0, typebox_1.querySyntax)(exports.itemQueryProperties),
    // Add additional query properties here
    typebox_1.Type.Object({}, { additionalProperties: false }),
], { additionalProperties: false });
exports.itemQueryValidator = (0, typebox_1.getValidator)(exports.itemQuerySchema, validators_1.queryValidator);
exports.itemQueryResolver = (0, schema_1.resolve)({});
