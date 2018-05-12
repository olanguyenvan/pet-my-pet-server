import gql from 'graphql-tag';
import { ResolverObject, ResolverFn } from '../types';
import { Pet } from '../entities/pet';
import { PetBrand } from '../entities/pet-brand';

export const pet = gql`
  type Pet {
    id: ID
    name: String
    brand: PetBrand
  }

  input InputPet {
    name: String!
    brandId: Int!
  }

  input PetSearchInput {
    id: Int!
  }
`;

export interface PetType extends ResolverObject {
  brand: ResolverFn<Pet, {}, PetBrand>;
}