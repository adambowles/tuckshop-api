import type { Params } from '@feathersjs/feathers';
import { MongoDBService } from '@feathersjs/mongodb';
import type { MongoDBAdapterParams, MongoDBAdapterOptions } from '@feathersjs/mongodb';
import type { Application } from '../../declarations';
import type { Category, CategoryData, CategoryPatch, CategoryQuery } from './categories.schema';
export type { Category, CategoryData, CategoryPatch, CategoryQuery };
export interface CategoryParams extends MongoDBAdapterParams<CategoryQuery> {
}
export declare class CategoryService<ServiceParams extends Params = CategoryParams> extends MongoDBService<Category, CategoryData, CategoryParams, CategoryPatch> {
}
export declare const getOptions: (app: Application) => MongoDBAdapterOptions;
