import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { User } from "./user";

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  score: number;

  @Column()
  message: string;
  
  @OneToOne(type => User)
  author: User;

  @OneToOne(type => User)
  target: User;
}