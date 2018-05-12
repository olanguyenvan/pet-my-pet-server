import { GraphQLServer } from 'graphql-yoga';
import { typeDefs } from './type-defs';
import { resolvers } from './resolvers';
import { Props } from 'graphql-yoga/dist/src/types';
import { Context } from './context';
import { authMiddleware } from './middleware';
import { config } from './config';
import "reflect-metadata";
import { createConnection, ConnectionOptions } from 'typeorm';
import { CareRequest } from './entities/care-request';
import { HostOffer } from './entities/host-offer';
import { Pet } from './entities/pet';
import { Reservation } from './entities/reservation';
import { Review } from './entities/review';
import { User } from './entities/user';
import { AppLocation } from './entities/app-location';
import { PetBrand } from './resolvers/pet-brand';

const run = async () => {
  const { database } = config;

  const dbConnection = await createConnection({
    ...database,
    entities: [
      AppLocation,
      CareRequest,
      HostOffer,
      PetBrand,
      Pet,
      Reservation,
      Review,
      User
    ]
  } as ConnectionOptions);

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
    port: config.port,
    cors: {
      origin: '*'
    }
  }, () => console.log('Server is running on localhost:4000'));
};

run();