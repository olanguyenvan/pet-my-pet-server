import gql from 'graphql-tag';
import { ResolverObject, ResolverFn } from '../types';
import { UserType } from './user';
import { AppLocationType } from './app-location';
import { PetTypeType } from './pet-type';

export const hostOffer = gql`
  type HostOffer {
    id: ID
    author: User
    start: String
    end: String
    location: AppLocation
    types: [PetType]
  }

  input InputHostOffer {
    author: User
    start: String
    end: String
    location: AppLocation
    types: [Int]
  }

  input HostOfferSearchInput {
    id: Int!
  }
`;

export interface HostOfferType extends ResolverObject {
  id: ResolverFn<any, {}, number>;
  author: ResolverFn<any, {}, UserType>;
  start: ResolverFn<any, {}, string>;
  end: ResolverFn<any, {}, string>;
  location: ResolverFn<any, {}, AppLocationType>;
  type: ResolverFn<any, {}, [PetTypeType]>;
}