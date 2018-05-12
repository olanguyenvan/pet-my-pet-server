import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { GraphQLServer } from 'graphql-yoga';
import { config } from './config';

export const authMiddleware = (server: GraphQLServer) => (req: Request, err: Response, next: NextFunction): any => {
  const bearer = req.headers.authorization;
  if (!bearer && typeof bearer !== 'string') {
    return next();
  } 
  const token = bearer.split('Bearer')[1];
  if (!token) {
    return next();
  }

  const trimmedToken = token.trim();
  try {
    const decoded = jwt.verify(trimmedToken, config.jwtSecret);

    if (typeof decoded !== 'object') {
      throw new Error();
    } else {
      const { user } = decoded as any;
      server.context.user = user;
      return next();
    }
  } catch (e) {
    return next();
  }
};