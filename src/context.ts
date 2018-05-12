import { User } from "./entities/user";
import { Connection } from "typeorm";

export interface Context {
  user: User | null;
  jwtSecret: string;
  dbConnection: Connection;
}