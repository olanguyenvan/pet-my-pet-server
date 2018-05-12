import gql from 'graphql-tag';
import { ResolverObject, ResolverFn } from '../types';
import { CareRequest } from '../entities/care-request';
import { User } from '../entities/user';
import { IdHolder } from './interfaces/id-holder';

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
    pets: [Int]!
  }

  input CareRequestSearchInput {
    id: Int!
  }
`;

export interface CareRequestType extends ResolverObject {
  author: ResolverFn<CareRequest, {}, User>;
}

export interface CareRequestSearchInput extends IdHolder {

}