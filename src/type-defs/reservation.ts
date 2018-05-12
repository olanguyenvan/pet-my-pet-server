import gql from 'graphql-tag';
import { ResolverObject, ResolverFn } from '../types';
import { UserType } from './user';
import { HostOfferType } from './host-offer';
import { CareRequestType } from './care-request';

export const reservation = gql`
  type Reservation {
    id: ID
    careRequest: CareRequest
    hostOffer: HostOffer
  }

  input InputReservation {
    careRequestId: Int!
    hostOfferId: Int!
  }

  input ReservationSearchInput {
    id: Int!
  }
`;

export interface ReservationType extends ResolverObject {
  id: ResolverFn<any, {}, number>;
  careRequest: ResolverFn<any, {}, CareRequestType>;
  hostOffer: ResolverFn<any, {}, HostOfferType>;
}