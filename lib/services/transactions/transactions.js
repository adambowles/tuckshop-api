"use strict";
// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transaction = void 0;
const schema_1 = require("@feathersjs/schema");
const transactions_schema_1 = require("./transactions.schema");
const transactions_class_1 = require("./transactions.class");
const transactions_shared_1 = require("./transactions.shared");
__exportStar(require("./transactions.class"), exports);
__exportStar(require("./transactions.schema"), exports);
// A configure function that registers the service and its hooks via `app.configure`
const transaction = (app) => {
    // Register our service on the Feathers application
    app.use(transactions_shared_1.transactionPath, new transactions_class_1.TransactionService((0, transactions_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: transactions_shared_1.transactionMethods,
        // You can add additional custom events to be sent to clients here
        events: [],
    });
    // Initialize hooks
    app.service(transactions_shared_1.transactionPath).hooks({
        around: {
            all: [
                schema_1.hooks.resolveExternal(transactions_schema_1.transactionExternalResolver),
                schema_1.hooks.resolveResult(transactions_schema_1.transactionResolver),
            ],
        },
        before: {
            all: [
                schema_1.hooks.validateQuery(transactions_schema_1.transactionQueryValidator),
                schema_1.hooks.resolveQuery(transactions_schema_1.transactionQueryResolver),
            ],
            find: [],
            get: [],
            create: [
                schema_1.hooks.validateData(transactions_schema_1.transactionDataValidator),
                schema_1.hooks.resolveData(transactions_schema_1.transactionDataResolver),
            ],
            patch: [
                schema_1.hooks.validateData(transactions_schema_1.transactionPatchValidator),
                schema_1.hooks.resolveData(transactions_schema_1.transactionPatchResolver),
            ],
            remove: [],
        },
        after: {
            all: [],
        },
        error: {
            all: [],
        },
    });
};
exports.transaction = transaction;
