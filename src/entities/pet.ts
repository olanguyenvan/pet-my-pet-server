import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToMany, ManyToOne } from "typeorm";
import { User } from "./user";
import { PetBrand } from "./pet-brand";
import { CareRequest } from "./care-request";

@Entity()
export class Pet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(type => PetBrand)
  brand: Promise<PetBrand>;

  @ManyToOne(type => User)
  owner: Promise<User>;

  @ManyToMany(type => CareRequest, careRequest => careRequest.pets)
  careRequests: Promise<CareRequest[]>;
}