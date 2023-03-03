import type { Static } from '@feathersjs/typebox';
import type { HookContext } from '../../declarations';
export declare const categorySchema: import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
    name: import("@sinclair/typebox").TString<string>;
}>;
export type Category = Static<typeof categorySchema>;
export declare const categoryValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const categoryResolver: import("@feathersjs/schema").Resolver<{
    name: string;
    _id: string | {};
}, HookContext<any>>;
export declare const categoryExternalResolver: import("@feathersjs/schema").Resolver<{
    name: string;
    _id: string | {};
}, HookContext<any>>;
export declare const categoryDataSchema: import("@sinclair/typebox").TPick<import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
    name: import("@sinclair/typebox").TString<string>;
}>, ["name"]>;
export type CategoryData = Static<typeof categoryDataSchema>;
export declare const categoryDataValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const categoryDataResolver: import("@feathersjs/schema").Resolver<{
    name: string;
    _id: string | {};
}, HookContext<any>>;
export declare const categoryPatchSchema: import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
    name: import("@sinclair/typebox").TString<string>;
}>>;
export type CategoryPatch = Static<typeof categoryPatchSchema>;
export declare const categoryPatchValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const categoryPatchResolver: import("@feathersjs/schema").Resolver<{
    name: string;
    _id: string | {};
}, HookContext<any>>;
export declare const categoryQueryProperties: import("@sinclair/typebox").TPick<import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
    name: import("@sinclair/typebox").TString<string>;
}>, ["_id", "name"]>;
export declare const categoryQuerySchema: import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
    $limit: import("@sinclair/typebox").TNumber;
    $skip: import("@sinclair/typebox").TNumber;
    $sort: import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    }>;
    $select: import("@sinclair/typebox").TUnsafe<("name" | "_id")[]>;
    $and: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TString<string>;
            $gte: import("@sinclair/typebox").TString<string>;
            $lt: import("@sinclair/typebox").TString<string>;
            $lte: import("@sinclair/typebox").TString<string>;
            $ne: import("@sinclair/typebox").TString<string>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        }>, import("@sinclair/typebox").TObject<{
            [key: string]: import("@sinclair/typebox").TSchema;
        } | undefined>]>>]>>;
        _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
            $gte: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
            $lt: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
            $lte: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
            $ne: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>>;
        }>, import("@sinclair/typebox").TObject<{
            [key: string]: import("@sinclair/typebox").TSchema;
        } | undefined>]>>]>>;
    }>>, import("@sinclair/typebox").TObject<{
        $or: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
                $gt: import("@sinclair/typebox").TString<string>;
                $gte: import("@sinclair/typebox").TString<string>;
                $lt: import("@sinclair/typebox").TString<string>;
                $lte: import("@sinclair/typebox").TString<string>;
                $ne: import("@sinclair/typebox").TString<string>;
                $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
                $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
            }>, import("@sinclair/typebox").TObject<{
                [key: string]: import("@sinclair/typebox").TSchema;
            } | undefined>]>>]>>;
            _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
                $gt: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
                $gte: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
                $lt: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
                $lte: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
                $ne: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
                $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>>;
                $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>>;
            }>, import("@sinclair/typebox").TObject<{
                [key: string]: import("@sinclair/typebox").TSchema;
            } | undefined>]>>]>>;
        }>>>;
    }>]>>;
    $or: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TString<string>;
            $gte: import("@sinclair/typebox").TString<string>;
            $lt: import("@sinclair/typebox").TString<string>;
            $lte: import("@sinclair/typebox").TString<string>;
            $ne: import("@sinclair/typebox").TString<string>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        }>, import("@sinclair/typebox").TObject<{
            [key: string]: import("@sinclair/typebox").TSchema;
        } | undefined>]>>]>>;
        _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
            $gte: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
            $lt: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
            $lte: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
            $ne: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>>;
        }>, import("@sinclair/typebox").TObject<{
            [key: string]: import("@sinclair/typebox").TSchema;
        } | undefined>]>>]>>;
    }>>>;
}>>, import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TString<string>;
        $gte: import("@sinclair/typebox").TString<string>;
        $lt: import("@sinclair/typebox").TString<string>;
        $lte: import("@sinclair/typebox").TString<string>;
        $ne: import("@sinclair/typebox").TString<string>;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
    }>, import("@sinclair/typebox").TObject<{
        [key: string]: import("@sinclair/typebox").TSchema;
    } | undefined>]>>]>>;
    _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
        $gte: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
        $lt: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
        $lte: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
        $ne: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>>;
    }>, import("@sinclair/typebox").TObject<{
        [key: string]: import("@sinclair/typebox").TSchema;
    } | undefined>]>>]>>;
}>>]>, import("@sinclair/typebox").TObject<{}>]>;
export type CategoryQuery = Static<typeof categoryQuerySchema>;
export declare const categoryQueryValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const categoryQueryResolver: import("@feathersjs/schema").Resolver<Partial<{
    $limit: number;
    $skip: number;
    $sort: {
        name?: number | undefined;
        _id?: number | undefined;
    };
    $select: ("name" | "_id")[];
    $and: ({
        name?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        } & {}> | undefined;
        _id?: string | {} | Partial<{
            $gt: string | {};
            $gte: string | {};
            $lt: string | {};
            $lte: string | {};
            $ne: string | {};
            $in: (string | {})[];
            $nin: (string | {})[];
        } & {}> | undefined;
    } | {
        $or: {
            name?: string | Partial<{
                $gt: string;
                $gte: string;
                $lt: string;
                $lte: string;
                $ne: string;
                $in: string[];
                $nin: string[];
            } & {}> | undefined;
            _id?: string | {} | Partial<{
                $gt: string | {};
                $gte: string | {};
                $lt: string | {};
                $lte: string | {};
                $ne: string | {};
                $in: (string | {})[];
                $nin: (string | {})[];
            } & {}> | undefined;
        }[];
    })[];
    $or: {
        name?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        } & {}> | undefined;
        _id?: string | {} | Partial<{
            $gt: string | {};
            $gte: string | {};
            $lt: string | {};
            $lte: string | {};
            $ne: string | {};
            $in: (string | {})[];
            $nin: (string | {})[];
        } & {}> | undefined;
    }[];
}> & {
    name?: string | Partial<{
        $gt: string;
        $gte: string;
        $lt: string;
        $lte: string;
        $ne: string;
        $in: string[];
        $nin: string[];
    } & {}> | undefined;
    _id?: string | {} | Partial<{
        $gt: string | {};
        $gte: string | {};
        $lt: string | {};
        $lte: string | {};
        $ne: string | {};
        $in: (string | {})[];
        $nin: (string | {})[];
    } & {}> | undefined;
} & {}, HookContext<any>>;
