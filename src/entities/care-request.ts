import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinTable, ManyToMany, ManyToOne } from "typeorm";
import { User } from "./user";
import { Pet } from "./pet";
import { Reservation } from "./reservation";

@Entity()
export class CareRequest {
  @PrimaryGeneratedColumn()
  id: number;
  
  @ManyToOne(type => User)
  author: User;
  
  @Column()
  start: string;

  @Column()
  end: string;

  @ManyToMany(type => Pet, pet => pet.careRequests)
  @JoinTable()
  pets: Pet[];

  @OneToOne(type => Reservation)
  reservation: Reservation;
}