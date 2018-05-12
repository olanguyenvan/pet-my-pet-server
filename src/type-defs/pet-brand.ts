import gql from 'graphql-tag';
import { ResolverObject, ResolverFn } from '../types';
import { IdHolder } from './interfaces/id-holder';

export const petBrand = gql`
  type PetBrand {
    id: ID
    name: String
  }

  input InputPetBrand {
    name: String!
  }

  input PetBrandSearchInput {
    id: Int!
  }
`;

export interface PetBrandType extends ResolverObject {
}

export interface InputPetBrand {
    name: string;
}

export interface PetBrandSearchInput extends IdHolder {
  
}