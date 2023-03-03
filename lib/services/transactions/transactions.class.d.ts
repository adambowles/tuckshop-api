import type { Params } from '@feathersjs/feathers';
import { MongoDBService } from '@feathersjs/mongodb';
import type { MongoDBAdapterParams, MongoDBAdapterOptions } from '@feathersjs/mongodb';
import type { Application } from '../../declarations';
import type { Transaction, TransactionData, TransactionPatch, TransactionQuery } from './transactions.schema';
export type { Transaction, TransactionData, TransactionPatch, TransactionQuery, };
export interface TransactionParams extends MongoDBAdapterParams<TransactionQuery> {
}
export declare class TransactionService<ServiceParams extends Params = TransactionParams> extends MongoDBService<Transaction, TransactionData, TransactionParams, TransactionPatch> {
}
export declare const getOptions: (app: Application) => MongoDBAdapterOptions;
