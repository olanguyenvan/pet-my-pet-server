import { ReservationType } from "../type-defs/reservation";

export const Reservation: ReservationType = {
  careRequest: (reservation) => reservation.careRequest,
  hostOffer: (reservation) => reservation.hostOffer
};