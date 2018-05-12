import gql from 'graphql-tag';
import { ResolverObject, ResolverFn } from '../types';
import { User } from '../entities/user';
import { UserSearchInput } from './user';
import { CareRequestSearchInput } from './care-request';
import { CareRequest } from '../entities/care-request';
import { HostOfferSearchInput } from './host-offer';
import { HostOffer } from '../entities/host-offer';
import { PetBrand } from '../entities/pet-brand';
import { PetBrandSearchInput } from './pet-brand';
import { Reservation } from '../entities/reservation';
import { ReservationSearchInput } from './reservation';

export const query = gql`
  type Query {
    users: [User]!
    user(userSearchInput: UserSearchInput): User

    careRequests: [CareRequest]!
    careRequest(careRequestSearchInput: CareRequestSearchInput!): CareRequest

    hostOffers: [HostOffer]!
    hostOffer(hostOfferSearchInput: HostOfferSearchInput!): HostOffer

    petBrands: [PetBrand]!
    petBrand(petBrandSearchInput: PetBrandSearchInput!): PetBrand
  }
`;

export interface QueryType extends ResolverObject {
  users: ResolverFn<any, {}, User[]>;
  user: ResolverFn<any, { userSearchInput: UserSearchInput }, User | undefined>;

  careRequests: ResolverFn<any, {}, CareRequest[]>;
  careRequest: ResolverFn<any, { careRequestSearchInput: CareRequestSearchInput }, CareRequest | undefined>;

  hostOffers: ResolverFn<any, {}, HostOffer[]>;
  hostOffer: ResolverFn<any, { hostOfferSearchInput: HostOfferSearchInput }, HostOffer | undefined>;

  petBrands: ResolverFn<any, {}, PetBrand[]>;
  petBrand: ResolverFn<any, { petBrandSearchInput: PetBrandSearchInput }, PetBrand | undefined>;
}