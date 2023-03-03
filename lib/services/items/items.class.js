"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOptions = exports.ItemService = void 0;
const mongodb_1 = require("@feathersjs/mongodb");
// By default calls the standard MongoDB adapter service methods but can be customized with your own functionality.
class ItemService extends mongodb_1.MongoDBService {
}
exports.ItemService = ItemService;
const getOptions = (app) => {
    return {
        paginate: app.get('paginate'),
        Model: app.get('mongodbClient').then((db) => db.collection('items')),
    };
};
exports.getOptions = getOptions;
