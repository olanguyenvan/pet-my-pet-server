import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from "typeorm";
import { Pet } from "./pet";
import { HostOffer } from "./host-offer";
import { CareRequest } from "./care-request";
import { Review } from "./review";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @OneToMany(type => Pet, pet => pet.owner)
  @JoinColumn()
  pets: Pet[];
  
  @OneToMany(type => HostOffer, hostOffer => hostOffer.author)
  @JoinColumn()
  hostOffers: HostOffer[];

  @OneToMany(type => CareRequest, careRequest => careRequest.author)
  @JoinColumn()
  careRequests: CareRequest[];

  @OneToMany(type => Review, review => review.author)
  @JoinColumn()
  reviews: Review[];
}