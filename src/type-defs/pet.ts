import gql from 'graphql-tag';
import { ResolverObject, ResolverFn } from '../types';
import { UserType } from './user';
import { PetTypeType } from './pet-type';

export const pet = gql`
  type Pet {
    id: ID
    name: String
    type: PetType
  }

  input InputPet {
    name: String
    type: Int
  }

  input PetSearchInput {
    id: Int!
  }
`;

export interface PetType extends ResolverObject {
  id: ResolverFn<any, {}, number>;
  name: ResolverFn<any, {}, string>;
  type: ResolverFn<any, {}, PetTypeType>;
}