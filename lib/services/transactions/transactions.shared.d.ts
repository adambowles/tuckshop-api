import type { Params } from '@feathersjs/feathers';
import type { ClientApplication } from '../../client';
import type { Transaction, TransactionData, TransactionPatch, TransactionQuery, TransactionService } from './transactions.class';
export type { Transaction, TransactionData, TransactionPatch, TransactionQuery, };
export type TransactionClientService = Pick<TransactionService<Params<TransactionQuery>>, (typeof transactionMethods)[number]>;
export declare const transactionPath = "transactions";
export declare const transactionMethods: readonly ["find", "get", "create", "patch", "remove"];
export declare const transactionClient: (client: ClientApplication) => void;
declare module '../../client' {
    interface ServiceTypes {
        [transactionPath]: TransactionClientService;
    }
}
