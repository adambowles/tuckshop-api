import type { Application } from '../../declarations';
import { ItemService } from './items.class';
import { itemPath } from './items.shared';
export * from './items.class';
export * from './items.schema';
export declare const item: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        [itemPath]: ItemService;
    }
}
