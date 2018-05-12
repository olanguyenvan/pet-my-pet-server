import gql from 'graphql-tag';
import { ResolverObject, ResolverFn } from '../types';

export const petType= gql`
  type PetType {
    id: ID
    name: String
  }

  input PetTypeSearchInput {
    id: Int!
  }
`;

export interface PetTypeType extends ResolverObject {
  id: ResolverFn<any, {}, number>;
  name: ResolverFn<any, {}, string>;
}