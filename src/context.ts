import { User } from "./entities/user";
import { Connection } from "typeorm";

export interface Context {
  userId: string | null;
  jwtSecret: string;
  dbConnection: Connection;
}