import gql from "graphql-tag";
import { ResolverObject, ResolverFn } from "../types";
import { UserType } from "./user";

export const mutation = gql`
  type Mutation {
    login(email: String!, password: String!): String!
    register(user: InputUser!): User!
  }
`;

export interface MutationType extends ResolverObject {
  login: ResolverFn<any, {email: string, password: string}, string>;
  // register: ResolverFn<any, InputUser, UserType>;
}