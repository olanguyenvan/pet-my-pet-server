import gql from 'graphql-tag';

export const basic = gql`
  type Basic {
    name: String
  }
`;

export interface Basic {
  name: string;
}