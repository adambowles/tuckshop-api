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
exports.item = void 0;
const schema_1 = require("@feathersjs/schema");
const items_schema_1 = require("./items.schema");
const items_class_1 = require("./items.class");
const items_shared_1 = require("./items.shared");
__exportStar(require("./items.class"), exports);
__exportStar(require("./items.schema"), exports);
// A configure function that registers the service and its hooks via `app.configure`
const item = (app) => {
    // Register our service on the Feathers application
    app.use(items_shared_1.itemPath, new items_class_1.ItemService((0, items_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: items_shared_1.itemMethods,
        // You can add additional custom events to be sent to clients here
        events: [],
    });
    // Initialize hooks
    app.service(items_shared_1.itemPath).hooks({
        around: {
            all: [
                schema_1.hooks.resolveExternal(items_schema_1.itemExternalResolver),
                schema_1.hooks.resolveResult(items_schema_1.itemResolver),
            ],
        },
        before: {
            all: [
                schema_1.hooks.validateQuery(items_schema_1.itemQueryValidator),
                schema_1.hooks.resolveQuery(items_schema_1.itemQueryResolver),
            ],
            find: [],
            get: [],
            create: [
                schema_1.hooks.validateData(items_schema_1.itemDataValidator),
                schema_1.hooks.resolveData(items_schema_1.itemDataResolver),
            ],
            patch: [
                schema_1.hooks.validateData(items_schema_1.itemPatchValidator),
                schema_1.hooks.resolveData(items_schema_1.itemPatchResolver),
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
exports.item = item;
