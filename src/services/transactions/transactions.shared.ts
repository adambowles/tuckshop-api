// For more information about this file see https://dove.feathersjs.com/guides/cli/service.shared.html
import type { Params } from '@feathersjs/feathers';
import type { ClientApplication } from '../../client';
import type {
  Transaction,
  TransactionData,
  TransactionPatch,
  TransactionQuery,
  TransactionService,
} from './transactions.class';

export type {
  Transaction,
  TransactionData,
  TransactionPatch,
  TransactionQuery,
};

export type TransactionClientService = Pick<
  TransactionService<Params<TransactionQuery>>,
  (typeof transactionMethods)[number]
>;

export const transactionPath = 'transactions';

export const transactionMethods = [
  'find',
  'get',
  'create',
  'patch',
  'remove',
] as const;

export const transactionClient = (client: ClientApplication) => {
  const connection = client.get('connection');

  client.use(transactionPath, connection.service(transactionPath), {
    methods: transactionMethods,
  });
};

// Add this service to the client service type index
declare module '../../client' {
  interface ServiceTypes {
    [transactionPath]: TransactionClientService;
  }
}
