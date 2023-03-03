import type { Params } from '@feathersjs/feathers';
import type { ClientApplication } from '../../client';
import type { Item, ItemData, ItemPatch, ItemQuery, ItemService } from './items.class';
export type { Item, ItemData, ItemPatch, ItemQuery };
export type ItemClientService = Pick<ItemService<Params<ItemQuery>>, (typeof itemMethods)[number]>;
export declare const itemPath = "items";
export declare const itemMethods: readonly ["find", "get", "create", "patch", "remove"];
export declare const itemClient: (client: ClientApplication) => void;
declare module '../../client' {
    interface ServiceTypes {
        [itemPath]: ItemClientService;
    }
}
