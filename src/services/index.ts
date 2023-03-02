import { transaction } from './transactions/transactions';
import { item } from './items/items';
import { user } from './users/users';
// For more information about this file see https://dove.feathersjs.com/guides/cli/application.html#configure-functions
import type { Application } from '../declarations';

export const services = (app: Application) => {
  app.configure(transaction);
  app.configure(item);
  app.configure(user);
  // All services will be registered here
};
