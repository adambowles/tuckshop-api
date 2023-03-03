"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.services = void 0;
const categories_1 = require("./categories/categories");
const transactions_1 = require("./transactions/transactions");
const items_1 = require("./items/items");
const users_1 = require("./users/users");
const services = (app) => {
    app.configure(categories_1.category);
    app.configure(transactions_1.transaction);
    app.configure(items_1.item);
    app.configure(users_1.user);
    // All services will be registered here
};
exports.services = services;
