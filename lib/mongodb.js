"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongodb = void 0;
// For more information about this file see https://dove.feathersjs.com/guides/cli/databases.html
const mongodb_1 = require("mongodb");
const mongodb = (app) => {
    const connection = process.env.DB_CONN_STRING;
    const database = new URL(connection).pathname.substring(1);
    const mongoClient = mongodb_1.MongoClient.connect(connection).then((client) => client.db(database));
    app.set('mongodbClient', mongoClient);
};
exports.mongodb = mongodb;
