import { Query } from "./query";
import { Schema } from "../type-defs";
import { Mutation } from "./mutation";
import { Pet } from "./pet";
import { AppLocation } from "./app-location";
import { CareRequest } from "./care-request";
import { HostOffer } from "./host-offer";
import { Review } from "./review";
import { PetBrand } from "./pet-brand";
import { User } from "./user";
import { Reservation } from "./reservation";

export const resolvers: Schema = {
  Query,
  Mutation,
  AppLocation,
  CareRequest,
  HostOffer,
  PetBrand,
  Pet,
  Reservation,
  Review,
  User
};