import gql from 'graphql-tag';
import { ResolverObject, ResolverFn } from '../types';

export const appLocation = gql`
  type AppLocation {
    id: ID!
    latitude: Float!
    longitude: Float!
  }

  input InputAppLocation {
    latitude: Float!
    longitude: Float!
  }

  input AppLocationSearchInput {
    id: Int!
  }
`;

export interface AppLocationType extends ResolverObject {
}