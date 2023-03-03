import type { Application } from '../../declarations';
import { CategoryService } from './categories.class';
import { categoryPath } from './categories.shared';
export * from './categories.class';
export * from './categories.schema';
export declare const category: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        [categoryPath]: CategoryService;
    }
}
