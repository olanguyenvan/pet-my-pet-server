import gql from 'graphql-tag';
import { ResolverObject, ResolverFn } from '../types';

export const query = gql`
  type Query {
    hello: String
  }
`;

export interface QueryType extends ResolverObject {
  hello: ResolverFn<any, {}, string>;
}