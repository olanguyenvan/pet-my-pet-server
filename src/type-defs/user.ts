import gql from 'graphql-tag';
import { ResolverObject, ResolverFn } from '../types';
import { User } from '../entities/user';
import { Pet } from '../entities/pet';
import { HostOffer } from '../entities/host-offer';
import { CareRequest } from '../entities/care-request';
import { Review } from '../entities/review';
import { IdHolder } from './interfaces/id-holder';

export const user = gql`
  type User {
    id: ID
    firstname: String
    lastname: String
    email: String
    pets: [Pet]
    hostOffers: [HostOffer]
    careRequests: [CareRequest]
    reviews: [Review]
  }

  input InputUser {
    firstname: String!
    lastname: String!
    email: String!
    password: String!
  }

  input UserSearchInput {
    id: Int!
  }
`;

export interface UserType extends ResolverObject {
  pets: ResolverFn<User, {}, Pet[]>;
  hostOffers: ResolverFn<User, {}, HostOffer[]>;
  careRequests: ResolverFn<User, {}, CareRequest[]>;
  reviews: ResolverFn<User, {}, Review[]>;
}

export interface InputUser {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

export interface UserSearchInput extends IdHolder {
}