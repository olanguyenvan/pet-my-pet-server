import gql from 'graphql-tag';
import { ResolverObject, ResolverFn } from '../types';

export const petBrand = gql`
  type PetBrand {
    id: ID
    name: String
  }

  input PetBrandSearchInput {
    id: Int!
  }
`;

export interface PetBrandType extends ResolverObject {
}