import gql from 'graphql-tag';
import { ResolverObject, ResolverFn } from '../types';
import { ReviewType } from './review';
import { HostOfferType } from './host-offer';
import { PetType } from './pet';
import { CareRequestType } from './care-request';

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
    firstname: String
    lastname: String
    email: String
    password: String
  }

  input UserSearchInput {
    id: Int!
  }
`;

export interface UserType extends ResolverObject {
  id: ResolverFn<any, {}, number>;
  firstname: ResolverFn<any, {}, string>;
  lastname: ResolverFn<any, {}, string>;
  email: ResolverFn<any, {}, string>;
  pets: ResolverFn<any, {}, PetType[]>;
  hostOffers: ResolverFn<any, {}, HostOfferType[]>;
  careRequest: ResolverFn<any, {}, CareRequestType[]>;
  reviews: ResolverFn<any, {}, ReviewType[]>;
  
}