import { Entity, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import { CareRequest } from "./care-request";
import { HostOffer } from "./host-offer";

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;
  
  @OneToOne(type => CareRequest)
  careRequest: Promise<CareRequest>;

  @OneToOne(type => HostOffer)
  hostOffer: Promise<HostOffer>;
}