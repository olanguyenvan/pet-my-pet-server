import gql from 'graphql-tag';
import { ResolverObject, ResolverFn } from '../types';
import { CareRequest } from '../entities/care-request';
import { User } from '../entities/user';

export const careRequest = gql`
  type CareRequest {
    id: ID!
    author: User!
    start: String!
    end: String!
    pets: [Pet]
  }

  input InputCareRequest {
    start: String
    end: String
    pets: [Integer]!
  }

  input CareRequestSearchInput {
    id: Int!
  }
`;

export interface CareRequestType extends ResolverObject {
  author: ResolverFn<CareRequest, {}, User>;
}