import { MutationType } from "../type-defs/mutation";
import { pick } from 'ramda';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const Mutation: MutationType = {
  login: async (_, { email, password }, { jwtSecret }) => {
    const user = { email: 'xD', password: bcrypt.hashSync('xD', 10) };

    if (!user) {
      throw new Error('There is not user with that email');
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error('Incorrect password');
    }

    const token = jwt.sign(
      { user: pick(['id', 'email'], user) },
      jwtSecret,
      { expiresIn: '1y' }
    );

    return token;
  }
  // ,
  // register: async (_,
  //   { user: { email, password, lastname, firstname, confirmPassword } },
  //   {connector: { user }}) => {
  //   const existingUser = await user.findOne({where: {email}})

  //   if (existingUser) {
  //     throw new Error('Email is already used!')
  //   }

  //   const values = {
  //     firstname: firstname,
  //     lastname: lastname,
  //     email: email,
  //     password: bcrypt.hashSync(password, 10)
  //   }

  //   return user.create(values)
  // }

};
