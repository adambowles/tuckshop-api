"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionClient = exports.transactionMethods = exports.transactionPath = void 0;
exports.transactionPath = 'transactions';
exports.transactionMethods = [
    'find',
    'get',
    'create',
    'patch',
    'remove',
];
const transactionClient = (client) => {
    const connection = client.get('connection');
    client.use(exports.transactionPath, connection.service(exports.transactionPath), {
        methods: exports.transactionMethods,
    });
};
exports.transactionClient = transactionClient;
