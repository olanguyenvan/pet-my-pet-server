import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinTable, ManyToMany } from "typeorm";
import { User } from "./user";
import { Pet } from "./pet";
import { Reservation } from "./reservation";

@Entity()
export class CareRequest {
  @PrimaryGeneratedColumn()
  id: number;
  
  @OneToOne(type => User)
  author: User;
  
  @Column()
  start: Date;

  @Column()
  end: Date;

  @ManyToMany(type => Pet, pet => pet.careRequests)
  @JoinTable()
  pets: Pet[];

  @OneToOne(type => Reservation)
  reservation: Reservation;
}