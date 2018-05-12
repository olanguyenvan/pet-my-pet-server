import { GraphQLServer } from 'graphql-yoga';
import { typeDefs } from './type-defs';
import { resolvers } from './resolvers';
import { Props } from 'graphql-yoga/dist/src/types';
import { Context } from './context';
import { authMiddleware } from './middleware';
import { config } from './config';

const serverConfig = {
  typeDefs,
  resolvers,
  context: {
    user: null,
    jwtSecret: config.jwtSecret
  } as Context,
} as Props;

const server = new GraphQLServer(serverConfig);

server.use(authMiddleware(server));

server.start({
  cors: {
    origin: '*'
  }
}, () => console.log('Server is running on localhost:4000'));