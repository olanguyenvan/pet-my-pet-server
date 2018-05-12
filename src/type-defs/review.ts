import gql from 'graphql-tag';
import { ResolverObject, ResolverFn } from '../types';
import { UserType } from './user';

export const review = gql`
  type Review {
    id: ID
    score: Int
    message: String
    author: User
    target: User
  }

  input InputReview {
    score: Int
    message: String
  }

  input ReviewSearchInput {
    id: Int!
  }
`;

export interface ReviewType extends ResolverObject {
  id: ResolverFn<any, {}, number>;
  score: ResolverFn<any, {}, number>;
  message: ResolverFn<any, {}, string>;
  author: ResolverFn<any, {}, UserType>;
  target: ResolverFn<any, {}, UserType>;
  
}