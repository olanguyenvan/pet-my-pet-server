import { Basic } from "../type-defs/basic";
import { ResolverFn } from "../types";
import { QueryType } from "../type-defs/query";

export const Query: QueryType = {
  hello: (_, { name }, { user }) => ({name: user ? user.email : name})
};

