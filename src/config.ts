export const config = {
  jwtSecret: '3D72F6182D9215DFB96C216331661A5E72FA13FD0620E6C5D8261EDF369FD3AB',
  database: {
    type: 'postgres',
    host: 'localhost',
    port: '5432',
    database: 'postgres',
    username: 'postgres',
    password: 'postgres',
    synchronize: true,
    logging: false
  }
};