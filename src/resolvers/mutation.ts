import { MutationType } from "../type-defs/mutation";
import { pick } from 'ramda';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from "../entities/user";
import { Review } from "../entities/review";
import { Reservation } from "../entities/reservation";
import { HostOffer } from "../entities/host-offer";
import { CareRequest } from "../entities/care-request";
import { PetBrand } from "../entities/pet-brand";
import { Pet } from "../entities/pet";

export const Mutation: MutationType = {
  login: async (_, { email, password }, { jwtSecret, dbConnection }) => {
    const user = await dbConnection.getRepository(User).createQueryBuilder().where('email = :email', { email }).getOne();

    console.log('User: ', user);

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
  },

  createReview: async (_, 
  {review: {targetId, score, message}},
  { dbConnection, userId }) => {
    
    const author = await dbConnection.getRepository(User).createQueryBuilder().where('id = :userId', { userId }).getOne();

    if (!author) {
      throw new Error('You are not logged in!');      
    }

    const target = await dbConnection.getRepository(User).createQueryBuilder().where('id = :targetId', { targetId }).getOne();

    if (!target) {
      throw new Error('There is not target user!');
    }

    if(target === author){
      throw new Error('Dont rate yourself!');
    }

    const newReview = dbConnection.getRepository(Review).create({
      author,
      target,
      score,
      message
    });

    return dbConnection.getRepository(Review).save(newReview);
  },

  createReservation: async (_, 
    {reservation: {careRequestId, hostOfferId}},
    { dbConnection, userId }) => {
      
      const existingUser = await dbConnection.getRepository(User).createQueryBuilder().where('id = :userId', { userId }).getOne();
  
      if (!existingUser) {
        throw new Error('You are not logged in!');      
      }
  
      const careRequest = await dbConnection.getRepository(CareRequest).createQueryBuilder().where('id = :id', { careRequestId }).getOne();
      const hostOffer = await dbConnection.getRepository(HostOffer).createQueryBuilder().where('id = :id', { hostOfferId }).getOne();

      const newReservation = dbConnection.getRepository(Reservation).create({
        careRequest,
        hostOffer
      });
  
      console.log('NewR: ', newReservation);
      
      return dbConnection.getRepository(Reservation).save(newReservation);
    },

    createPet: async (_, 
      {pet: { name, brandId}},
      { dbConnection, userId }) => {
        
        const owner = await dbConnection.getRepository(User).createQueryBuilder().where('id = :userId', { userId }).getOne();
    
        if (!owner) {
          throw new Error('You are not logged in!');      
        }
    
        const brand = await dbConnection.getRepository(PetBrand).createQueryBuilder().where('id = :brandId', { brandId }).getOne();
        const newPet = dbConnection.getRepository(Pet).create({
          brand,
          name,
          owner
        });
    
        console.log('NewP: ', newPet);
        
        return dbConnection.getRepository(Pet).save(newPet);
      },

      createPetBrand: async (_, 
        { petBrand: { name }},
        { dbConnection, userId }) => {
          console.log('Name: ',name)
          const owner = await dbConnection.getRepository(User).createQueryBuilder().where('id = :userId', { userId }).getOne();
      
          if (!owner) {
            throw new Error('You are not logged in!');      
          }
      
          const newPetBrand = dbConnection.getRepository(PetBrand).create({
            name
          });
      
          return dbConnection.getRepository(PetBrand).save(newPetBrand);
        },
        createCareRequest: async (_, 
          { careRequest: { start, end, pets}},
          { dbConnection, userId }) => {
            
            const author = await dbConnection.getRepository(User).createQueryBuilder().where('id = :userId', { userId }).getOne();
        
            if (!author) {
              throw new Error('You are not logged in!');      
            }
        
            const newCareRequest = dbConnection.getRepository(CareRequest).create({
              start,
              end,
              pets,
              author
            });
        
            return dbConnection.getRepository(CareRequest).save(newCareRequest);
          },
          createHostOffer: async (_, 
            { hostOffer: { start, end, location, petBrands }},
            { dbConnection, userId }) => {
              
              const author = await dbConnection.getRepository(User).createQueryBuilder().where('id = :userId', { userId }).getOne();
          
              if (!author) {
                throw new Error('You are not logged in!');      
              }
          
              const newHostOffer = dbConnection.getRepository(HostOffer).create({
                start,
                end,
                author,
                location,
                petBrands
              });
          
              return dbConnection.getRepository(HostOffer).save(newHostOffer);
            }
          
};
