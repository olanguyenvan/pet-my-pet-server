import { MutationType } from "../type-defs/mutation";
import { pick } from 'ramda';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from "../entities/user";

export const Mutation: MutationType = {
  login: async (_, { email, password }, { jwtSecret, dbConnection }) => {
    const user = await dbConnection.getRepository(User).createQueryBuilder().where('email = :email', { email }).getOne();

    if (!user) {
      throw new Error('There is not user with that email');
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error('Incorrect password');
    }

    const token = jwt.sign(
      { user: pick(['id'], user) },
      jwtSecret,
      { expiresIn: '1y' }
    );

    return token;
  },

  register: async (_,
    { user: { email, password, firstname, lastname } },
    { dbConnection }) => {

    console.log(email);

    const existingUser = await dbConnection.getRepository(User).createQueryBuilder().where('email = :email', { email }).getOne();

    console.log(existingUser);

    if (existingUser) {
      throw new Error('Email is already used!');
    }

    const newUser = dbConnection.getRepository(User).create({
      firstname,
      lastname,
      email,
      password: bcrypt.hashSync(password, 10)
    });

    return dbConnection.getRepository(User).save(newUser);
  }
};
