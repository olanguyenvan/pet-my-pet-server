import gql from 'graphql-tag';
import { ResolverObject, ResolverFn } from '../types';
import { UserType } from './user';

export const careRequest = gql`
  type CareRequest {
    id: ID
    author: User
    start: String
    end: String
    pets: [Pet]
  }

  input InputCareRequest {
    author: User
    start: String
    end: String
    pets: [Integer]
  }

  input CareRequestSearchInput {
    id: Int!
  }
`;

export interface CareRequestType extends ResolverObject {
  id: ResolverFn<any, {}, number>;
  author: ResolverFn<any, {}, UserType>;
  start: ResolverFn<any, {}, string>;
  end: ResolverFn<any, {}, string>;
  
}