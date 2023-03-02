// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html

import { hooks as schemaHooks } from '@feathersjs/schema';

import {
  transactionDataValidator,
  transactionPatchValidator,
  transactionQueryValidator,
  transactionResolver,
  transactionExternalResolver,
  transactionDataResolver,
  transactionPatchResolver,
  transactionQueryResolver,
} from './transactions.schema';

import type { Application } from '../../declarations';
import { TransactionService, getOptions } from './transactions.class';
import { transactionPath, transactionMethods } from './transactions.shared';

export * from './transactions.class';
export * from './transactions.schema';

// A configure function that registers the service and its hooks via `app.configure`
export const transaction = (app: Application) => {
  // Register our service on the Feathers application
  app.use(transactionPath, new TransactionService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: transactionMethods,
    // You can add additional custom events to be sent to clients here
    events: [],
  });
  // Initialize hooks
  app.service(transactionPath).hooks({
    around: {
      all: [
        schemaHooks.resolveExternal(transactionExternalResolver),
        schemaHooks.resolveResult(transactionResolver),
      ],
    },
    before: {
      all: [
        schemaHooks.validateQuery(transactionQueryValidator),
        schemaHooks.resolveQuery(transactionQueryResolver),
      ],
      find: [],
      get: [],
      create: [
        schemaHooks.validateData(transactionDataValidator),
        schemaHooks.resolveData(transactionDataResolver),
      ],
      patch: [
        schemaHooks.validateData(transactionPatchValidator),
        schemaHooks.resolveData(transactionPatchResolver),
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

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    [transactionPath]: TransactionService;
  }
}
