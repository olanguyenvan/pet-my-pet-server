import gql from 'graphql-tag';
import { Basic } from './basic';
import { ResolverObject, ResolverFn } from '../types';

export const query = gql`
  type Query {
    hello(name: String): Basic!
  }
`;

export interface QueryType extends ResolverObject {
  hello: ResolverFn<any, {name: string}, Basic>;
}