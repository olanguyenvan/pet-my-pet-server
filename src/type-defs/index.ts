import gql from 'graphql-tag';
import { query, QueryType } from './query';
import { basic } from './basic';
import { Resolvers, ResolverObject } from '../types';
import { MutationType, mutation } from './mutation';

export const typeDefs = gql`
  ${basic}
  ${query}
  ${mutation}

  schema {
    query: Query
    mutation: Mutation
  }
`;

export interface Schema extends Resolvers {
  Query: QueryType;
  Mutation: MutationType;
}