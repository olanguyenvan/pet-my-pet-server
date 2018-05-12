import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToMany } from "typeorm";
import { User } from "./user";
import { PetType } from "./pet-type";
import { CareRequest } from "./care-request";

@Entity()
export class Pet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToOne(type => PetType)
  type: PetType;

  @OneToOne(type => User)
  owner: User;

  @ManyToMany(type => CareRequest, careRequest => careRequest.pets)
  careRequests: CareRequest[];
}