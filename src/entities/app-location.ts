import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class AppLocation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  latitude: number;

  @Column()
  longitude: number;
}