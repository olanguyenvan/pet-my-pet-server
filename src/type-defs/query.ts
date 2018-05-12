import gql from 'graphql-tag';

export const query = gql`
  type Query {
    hello(name: String): Basic!
  }
`;

export interface HelloArgs {
  name: String;
}