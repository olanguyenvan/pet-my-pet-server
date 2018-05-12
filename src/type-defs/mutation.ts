import gql from "graphql-tag";
import { ResolverObject, ResolverFn } from "../types";

export const mutation = gql`
  type Mutation {
    login(email: String!, password: String!): String!
  }
`;

export interface MutationType extends ResolverObject {
  login: ResolverFn<any, {email: string, password: string}, string>;
}