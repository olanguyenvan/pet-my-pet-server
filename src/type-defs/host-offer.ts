import gql from 'graphql-tag';
import { ResolverObject, ResolverFn } from '../types';
import { HostOffer } from '../entities/host-offer';
import { User } from '../entities/user';
import { AppLocation } from '../entities/app-location';
import { PetBrand } from '../entities/pet-brand';
import { IdHolder } from './interfaces/id-holder';
import { InputAppLocation } from './app-location';

export const hostOffer = gql`
  type HostOffer {
    id: ID!
    author: User!
    start: String
    end: String
    location: AppLocation!
    petBrands: [PetBrand]!
  }

  input InputHostOffer {
    start: String
    end: String
    location: InputAppLocation!
    petBrands: [Int]
  }

  input HostOfferSearchInput {
    id: Int!
  }
`;

export interface HostOfferType extends ResolverObject {
  author: ResolverFn<HostOffer, {}, User>;
  location: ResolverFn<HostOffer, {}, AppLocation>;
  petBrands: ResolverFn<HostOffer, {}, PetBrand[]>;
}

export interface InputHostOffer {
    start: string;
    end: string;
    location: InputAppLocation;
    petBrands: number[];
}

export interface HostOfferSearchInput extends IdHolder {

}