// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers';
import { MongoDBService } from '@feathersjs/mongodb';
import type {
  MongoDBAdapterParams,
  MongoDBAdapterOptions,
} from '@feathersjs/mongodb';

import type { Application } from '../../declarations';
import type {
  Transaction,
  TransactionData,
  TransactionPatch,
  TransactionQuery,
} from './transactions.schema';

export type {
  Transaction,
  TransactionData,
  TransactionPatch,
  TransactionQuery,
};

export interface TransactionParams
  extends MongoDBAdapterParams<TransactionQuery> {}

// By default calls the standard MongoDB adapter service methods but can be customized with your own functionality.
export class TransactionService<
  ServiceParams extends Params = TransactionParams,
> extends MongoDBService<
  Transaction,
  TransactionData,
  TransactionParams,
  TransactionPatch
> {}

export const getOptions = (app: Application): MongoDBAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('mongodbClient').then((db) => db.collection('transactions')),
  };
};
