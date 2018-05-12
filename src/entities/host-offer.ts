import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { User } from "./user";

@Entity()
export class HostOffer {
  @PrimaryGeneratedColumn()
  id: number;
  
  @OneToOne(type => User)
  author: User;

  @Column()
  start: Date;

  @Column()
  end: Date;

  
}