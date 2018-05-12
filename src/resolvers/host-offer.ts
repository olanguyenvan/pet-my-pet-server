import { HostOfferType, hostOffer } from "../type-defs/host-offer";

export const HostOffer: HostOfferType = {
  author: (hostOffer) => hostOffer.author,
  location: (hostOffer) => hostOffer.location,
  petBrands: (hostOffer) => hostOffer.petBrands
};