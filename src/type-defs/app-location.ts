import gql from 'graphql-tag';
import { ResolverObject, ResolverFn } from '../types';
import { ReviewType } from './review';

export const appLocation = gql`
  type AppLocation {
    id: ID
    latitude: Float
    longitude: Float
  }

  input InputAppLocation {
    latitude: Float
    longitude: Float
  }

  input AppLocationSearchInput {
    id: Int!
  }
`;

export interface AppLocationType extends ResolverObject {
  id: ResolverFn<any, {}, number>;
  latitude: ResolverFn<any, {}, number>;
  longitude: ResolverFn<any, {}, number>;
}