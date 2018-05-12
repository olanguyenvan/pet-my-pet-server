import gql from 'graphql-tag';
import { ResolverObject, ResolverFn } from '../types';
import { Review } from '../entities/review';
import { User } from '../entities/user';

export const review = gql`
  type Review {
    id: ID
    score: Int
    message: String
    author: User
    target: User
  }

  input InputReview {
    targetId: Int!
    score: Int!
    message: String
  }

  input ReviewSearchInput {
    id: Int!
  }
`;

export interface ReviewType extends ResolverObject {
  author: ResolverFn<Review, {}, User>;
  target: ResolverFn<Review, {}, User>;
}