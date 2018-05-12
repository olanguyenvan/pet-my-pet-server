import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToMany, JoinTable, ManyToOne } from "typeorm";
import { User } from "./user";
import { AppLocation } from "./app-location";
import { Reservation } from "./reservation";
import { PetBrand } from "./pet-brand";

@Entity()
export class HostOffer {
  @PrimaryGeneratedColumn()
  id: number;
  
  @ManyToOne(type => User)
  author: User;

  @Column()
  start: Date;

  @Column()
  end: Date;
  
  @OneToOne(type => AppLocation)
  location: AppLocation;

  @OneToMany(type => Reservation, reservation => reservation.hostOffer)
  reservations: Reservation[];

  @ManyToMany(type => PetBrand, petBrand => petBrand.hostOffers)
  @JoinTable()
  petBrands: PetBrand[];
}