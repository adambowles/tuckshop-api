"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionQueryResolver = exports.transactionQueryValidator = exports.transactionQuerySchema = exports.transactionQueryProperties = exports.transactionPatchResolver = exports.transactionPatchValidator = exports.transactionPatchSchema = exports.transactionDataResolver = exports.transactionDataValidator = exports.transactionDataSchema = exports.transactionExternalResolver = exports.transactionResolver = exports.transactionValidator = exports.transactionSchema = void 0;
// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const typebox_2 = require("@feathersjs/typebox");
const validators_1 = require("../../validators");
// Main data model schema
exports.transactionSchema = typebox_1.Type.Object({
    _id: (0, typebox_2.ObjectIdSchema)(),
    user: (0, typebox_2.ObjectIdSchema)(),
    //TODO figure this out
    items: typebox_1.Type.Array(typebox_1.Type.Object({
        item: (0, typebox_2.ObjectIdSchema)(),
        quantity: typebox_1.Type.Number(),
    })),
}, { $id: 'Transaction', additionalProperties: false });
exports.transactionValidator = (0, typebox_1.getValidator)(exports.transactionSchema, validators_1.dataValidator);
exports.transactionResolver = (0, schema_1.resolve)({});
exports.transactionExternalResolver = (0, schema_1.resolve)({});
// Schema for creating new entries
exports.transactionDataSchema = typebox_1.Type.Pick(exports.transactionSchema, ['user'], {
    $id: 'TransactionData',
});
exports.transactionDataValidator = (0, typebox_1.getValidator)(exports.transactionDataSchema, validators_1.dataValidator);
exports.transactionDataResolver = (0, schema_1.resolve)({});
// Schema for updating existing entries
exports.transactionPatchSchema = typebox_1.Type.Partial(exports.transactionSchema, {
    $id: 'TransactionPatch',
});
exports.transactionPatchValidator = (0, typebox_1.getValidator)(exports.transactionPatchSchema, validators_1.dataValidator);
exports.transactionPatchResolver = (0, schema_1.resolve)({});
// Schema for allowed query properties
exports.transactionQueryProperties = typebox_1.Type.Pick(exports.transactionSchema, [
    '_id',
    'user',
]);
exports.transactionQuerySchema = typebox_1.Type.Intersect([
    (0, typebox_1.querySyntax)(exports.transactionQueryProperties),
    // Add additional query properties here
    typebox_1.Type.Object({}, { additionalProperties: false }),
], { additionalProperties: false });
exports.transactionQueryValidator = (0, typebox_1.getValidator)(exports.transactionQuerySchema, validators_1.queryValidator);
exports.transactionQueryResolver = (0, schema_1.resolve)({});
