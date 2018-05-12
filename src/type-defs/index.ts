import gql from 'graphql-tag';
import { query } from './query';
import { basic } from './basic';
import { Resolvers, ResolverObject } from '../types';

export const typeDefs = gql`
  ${basic}

  ${query}

  schema {
    query: Query
  }
`;

export interface Schema extends Resolvers {
  Query: ResolverObject;
}