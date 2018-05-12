import { IResolverObject, MergeInfo, IResolverOptions } from "graphql-tools/dist/Interfaces";
import { GraphQLScalarType, GraphQLResolveInfo, GraphQLFieldResolver } from "graphql";
import { Context } from "./context";

export interface Resolvers {
  [key: string]: (() => any) | IResolverObject | GraphQLScalarType | ResolverObject;
}

export declare type ResolverObject = {
  [key: string]: GraphQLFieldResolver<any, any> | IResolverOptions | ResolverFn<any, any, any>;
};

export type ResolverFn<Source, Args, Return> = 
  (source: Source, args: Args, context: Context, info: GraphQLResolveInfo & {
  mergeInfo: MergeInfo;
}) => Return; 