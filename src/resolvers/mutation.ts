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
import { AppLocation } from "../entities/app-location";

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

    const newUser = new User();
    newUser.firstname = firstname;
    newUser.lastname = lastname;
    newUser.email = email;
    newUser.password = bcrypt.hashSync(password, 10);

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

    const newReview = new Review();
    newReview.author = Promise.resolve(author);
    newReview.target = Promise.resolve(target);
    newReview.score = score;
    newReview.message = message;

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

      const newReservation = new Reservation();
      newReservation.careRequest = Promise.resolve(careRequest) as Promise<CareRequest>;
      newReservation.hostOffer = Promise.resolve(hostOffer) as Promise<HostOffer>;
      
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

        const newPet = new Pet();
        newPet.name = name;
        newPet.brand = Promise.resolve(brand) as Promise<PetBrand>;
        newPet.owner = Promise.resolve(owner) as Promise<User>;
    
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
      
          const newPetBrand = new PetBrand();
          newPetBrand.name = name;
      
          return dbConnection.getRepository(PetBrand).save(newPetBrand);
        },
        createCareRequest: async (_, 
          { careRequest: { start, end, pets}},
          { dbConnection, userId }) => {
            
            const author = await dbConnection.getRepository(User).createQueryBuilder().where('id = :userId', { userId }).getOne();
        
            if (!author) {
              throw new Error('You are not logged in!');      
            }
        
            const newCareRequest = new CareRequest();
            newCareRequest.start = start;
            newCareRequest.end = end;
            newCareRequest.author = Promise.resolve(author);
        
            return dbConnection.getRepository(CareRequest).save(newCareRequest);
          },
          createHostOffer: async (_, 
            { hostOffer: { start, end, location, petBrands }},
            { dbConnection, userId }) => {
              
              const author = await dbConnection.getRepository(User).createQueryBuilder().where('id = :userId', { userId }).getOne();
          
              if (!author) {
                throw new Error('You are not logged in!');      
              }
          
              const newHostOffer = new HostOffer();
              newHostOffer.start = start;
              newHostOffer.end = end;
              newHostOffer.author = Promise.resolve(author);
              newHostOffer.location = Promise.resolve(location) as Promise<AppLocation>;
          
              return dbConnection.getRepository(HostOffer).save(newHostOffer);
            }
};
