import type { TransportConnection, Application } from '@feathersjs/feathers';
import type { AuthenticationClientOptions } from '@feathersjs/authentication-client';
import './services/categories/categories.shared';
export type { Category, CategoryData, CategoryQuery, CategoryPatch, } from './services/categories/categories.shared';
import './services/transactions/transactions.shared';
export type { Transaction, TransactionData, TransactionQuery, TransactionPatch, } from './services/transactions/transactions.shared';
import './services/items/items.shared';
export type { Item, ItemData, ItemQuery, ItemPatch, } from './services/items/items.shared';
import './services/users/users.shared';
export type { User, UserData, UserQuery, UserPatch, } from './services/users/users.shared';
export interface Configuration {
    connection: TransportConnection<ServiceTypes>;
}
export interface ServiceTypes {
}
export type ClientApplication = Application<ServiceTypes, Configuration>;
/**
 * Returns a typed client for the tuckshop-api app.
 *
 * @param connection The REST or Socket.io Feathers client connection
 * @param authenticationOptions Additional settings for the authentication client
 * @see https://dove.feathersjs.com/api/client.html
 * @returns The Feathers client application
 */
export declare const createClient: <Configuration_1 = any>(connection: TransportConnection<ServiceTypes>, authenticationOptions?: Partial<AuthenticationClientOptions>) => ClientApplication;
