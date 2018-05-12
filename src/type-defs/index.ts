import gql from 'graphql-tag';
import { query, QueryType } from './query';
import { Resolvers, ResolverObject } from '../types';
import { MutationType, mutation } from './mutation';
import { pet, PetType } from './pet';
import { user, UserType } from './user';
import { reservation, ReservationType } from './reservation';
import { review, ReviewType } from './review';
import { hostOffer, HostOfferType } from './host-offer';
import { careRequest, CareRequestType } from './care-request';

// ${user}
// ${pet}
// ${reservation}
// ${review}
// ${hostOffer}
// ${careRequest}

export const typeDefs = gql`
  ${query}
  ${mutation}

  schema {
    query: Query
    mutation: Mutation
  }
`;

export interface Schema extends Resolvers {
  Query: QueryType;
  Mutation: MutationType;
  // Pet: PetType;
  // User: UserType;
  // Reservation: ReservationType;
  // Review: ReviewType;
  // HostOffer: HostOfferType;
  // CareRequest: CareRequestType;
}