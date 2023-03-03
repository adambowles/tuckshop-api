import type { Params } from '@feathersjs/feathers';
import { MongoDBService } from '@feathersjs/mongodb';
import type { MongoDBAdapterParams, MongoDBAdapterOptions } from '@feathersjs/mongodb';
import type { Application } from '../../declarations';
import type { Item, ItemData, ItemPatch, ItemQuery } from './items.schema';
export type { Item, ItemData, ItemPatch, ItemQuery };
export interface ItemParams extends MongoDBAdapterParams<ItemQuery> {
}
export declare class ItemService<ServiceParams extends Params = ItemParams> extends MongoDBService<Item, ItemData, ItemParams, ItemPatch> {
}
export declare const getOptions: (app: Application) => MongoDBAdapterOptions;
