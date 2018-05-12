import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne } from "typeorm";
import { User } from "./user";

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  score: number;

  @Column()
  message: string;
  
  @ManyToOne(type => User)
  author: Promise<User>;

  @ManyToOne(type => User)
  target: Promise<User>;
}