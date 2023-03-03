"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemClient = exports.itemMethods = exports.itemPath = void 0;
exports.itemPath = 'items';
exports.itemMethods = [
    'find',
    'get',
    'create',
    'patch',
    'remove',
];
const itemClient = (client) => {
    const connection = client.get('connection');
    client.use(exports.itemPath, connection.service(exports.itemPath), {
        methods: exports.itemMethods,
    });
};
exports.itemClient = itemClient;
