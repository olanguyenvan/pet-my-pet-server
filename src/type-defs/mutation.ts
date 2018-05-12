import gql from "graphql-tag";
import { ResolverObject, ResolverFn } from "../types";
import { User } from "../entities/user";
import { InputUser } from "./user";
import { Review } from "../entities/review";
import { InputReview } from "./review";
import { Reservation } from "../entities/reservation";
import { InputReservation } from "./reservation";
import { InputPet } from "./pet";
import { Pet } from "../entities/pet";
import { InputPetBrand } from "./pet-brand";
import { PetBrand } from "../entities/pet-brand";
import { InputHostOffer } from "./host-offer";
import { HostOffer } from "../entities/host-offer";
import { InputCareRequest } from "./care-request";
import { CareRequest } from "../entities/care-request";

export const mutation = gql`
  type Mutation {
    login(email: String!, password: String!): String!
    register(user: InputUser!): User!
    createReview(review: InputReview): Review!
    createReservation(reservation: InputReservation): Reservation!
    createPet(pet: InputPet): Pet!
    createPetBrand(petBrand: InputPetBrand): PetBrand!
    createHostOffer(hostOffer: InputHostOffer): HostOffer!
    createCareRequest(careRequest: InputCareRequest): CareRequest!
    
  }
`;

export interface MutationType extends ResolverObject {
  login: ResolverFn<any, {email: string, password: string}, string>;
  register: ResolverFn<any, {user: InputUser}, User>;
  createReview: ResolverFn<any, {review: InputReview}, Review>;
  createReservation: ResolverFn<any, {reservation: InputReservation}, Reservation>;
  createPet: ResolverFn<any, {pet: InputPet}, Pet>;
  createPetBrand: ResolverFn<any, {petBrand: InputPetBrand}, PetBrand>;
  createHostOffer: ResolverFn<any, {hostOffer: InputHostOffer}, HostOffer>;
  createCareRequest: ResolverFn<any, {careRequest: InputCareRequest}, CareRequest>;
  
}