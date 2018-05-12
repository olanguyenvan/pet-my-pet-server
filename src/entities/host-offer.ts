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
  author: Promise<User>;

  @Column()
  start: string;

  @Column()
  end: string;
  
  @OneToOne(type => AppLocation)
  location: Promise<AppLocation>;

  @OneToMany(type => Reservation, reservation => reservation.hostOffer)
  reservations: Promise<Reservation[]>;

  @ManyToMany(type => PetBrand, petBrand => petBrand.hostOffers)
  @JoinTable()
  petBrands: Promise<PetBrand[]>;
}