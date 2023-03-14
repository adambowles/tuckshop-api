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

import type { Application, HookContext } from '../../declarations';
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
        // Determine if stock is available
        async (context: HookContext) => {
          let itemIds: string[] = [];
          if (context.data?.items?.length) {
            itemIds = context.data.items.map(
              (item: { itemId: string }) => item.itemId,
            );
          }

          const items = await context.app.service('items').find({
            paginate: false,
            query: {
              _id: {
                $in: itemIds,
              },
            },
          });

          if (items.length !== context.data.items.length) {
            //TODO Report which item wan't found
            throw new Error('Item(s) not found');
          }

          context.data.items.forEach(
            (item: { itemId: string; quantity: number }) => {
              const exists = items.find((i) => String(i._id) === item.itemId);

              // Reject the request if stock is inufficient
              if (Number(exists?.stockRemaining) < item.quantity) {
                throw new Error(
                  `Insufficient stock for item id ${item.itemId} (${
                    exists?.name
                  }). Have ${Number(exists?.stockRemaining)}, need ${
                    item.quantity
                  }`,
                );
              }
            },
          );
        },
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
      create: [
        // Decrement stock
        async (context: HookContext) => {
          context.data.items.forEach(
            async (item: { itemId: string; quantity: number }) => {
              // Find the item in the db
              const dbItem = await context.app
                .service('items')
                .get(item.itemId);

              // Decrement the amount being purchased
              context.app.service('items').patch(item.itemId, {
                stockRemaining: dbItem.stockRemaining - item.quantity,
              });
            },
          );
        },
      ],
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
