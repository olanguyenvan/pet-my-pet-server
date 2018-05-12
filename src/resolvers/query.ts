import { HelloArgs } from "../type-defs/query";
import { Basic } from "../type-defs/basic";
import { ResolverFn, ResolverObject } from "../types";

const helloResolver: ResolverFn<any, HelloArgs, Basic> = (_, { name }) => {
  return ({name});
}

export const Query: ResolverObject = {
  hello: helloResolver
};

