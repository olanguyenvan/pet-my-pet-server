import { GraphQLServer } from 'graphql-yoga'
import { typeDefs } from './type-defs';
import { resolvers } from './resolvers';
import { Props } from 'graphql-yoga/dist/src/types';

const serverConfig = {
  typeDefs,
  resolvers
} as Props;

const server = new GraphQLServer(serverConfig);
server.start(() => console.log('Server is running on localhost:4000'));