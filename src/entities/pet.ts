import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { User } from "./user";
import { PetType } from "./pet-type";

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
}