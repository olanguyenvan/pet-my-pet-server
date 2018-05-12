import { ReviewType } from "../type-defs/review";

export const Review: ReviewType = {
  author: (review) => review.author,
  target: (review) => review.target
};