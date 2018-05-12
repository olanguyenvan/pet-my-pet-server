import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany } from "typeorm";
import { HostOffer } from "./host-offer";
import { Pet } from "./pet";

@Entity()
export class PetBrand {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(type => Pet, pet => pet.brand)
  pets: Pet[];

  @ManyToMany(type => HostOffer, hostOffer => hostOffer.petBrands)
  hostOffers: HostOffer[];
}