import { ResolverFn } from "../types";
import { QueryType } from "../type-defs/query";
import { User } from "../entities/user";
import { CareRequest } from "../entities/care-request";
import { HostOffer } from "../entities/host-offer";
import { PetBrand } from "../entities/pet-brand";

export const Query: QueryType = {
  users: (_1, _2, { dbConnection }) => dbConnection.getRepository(User).createQueryBuilder().getMany(),
  user: (_1, args, { dbConnection }) => dbConnection.getRepository(User).createQueryBuilder().where('id = :id', args).getOne(),
  
  careRequests: (_1, _2, { dbConnection }) => dbConnection.getRepository(CareRequest).createQueryBuilder().getMany(),
  careRequest: (_1, args, { dbConnection }) => dbConnection.getRepository(CareRequest).createQueryBuilder().where('id = :id', args).getOne(),
  
  hostOffers: (_1, _2, { dbConnection }) => dbConnection.getRepository(HostOffer).createQueryBuilder().getMany(),
  hostOffer: (_1, args, { dbConnection }) => dbConnection.getRepository(HostOffer).createQueryBuilder().where('id = :id', args).getOne(),
  
  petBrands: (_1, _2, { dbConnection }) => dbConnection.getRepository(PetBrand).createQueryBuilder().getMany(),
  petBrand: (_1, args, { dbConnection }) => dbConnection.getRepository(PetBrand).createQueryBuilder().where('id = :id', args).getOne(),
};

