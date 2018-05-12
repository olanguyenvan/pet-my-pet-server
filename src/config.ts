const env = process.env.NODE_ENV || 'development';

export interface Config {
  port: number;
  jwtSecret: string;
  database: {
    type: string;
    url?: string;
    host?: string;
    port?: number;
    database?: string;
    username?: string;
    schema?: string;
    password?: string;
    synchronize: boolean;
    logging: boolean;
  };
}

const localConfig: Config = {
  port: 4000,
  jwtSecret: '3D72F6182D9215DFB96C216331661A5E72FA13FD0620E6C5D8261EDF369FD3AB',
  database: {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    username: 'postgres',
    schema: 'pet',
    password: 'admin',
    synchronize: true,
    logging: true
  }
};

const productionConfig: Config = {
  port: 80,
  jwtSecret: '3D72F6182D9215DFB96C216331661A5E72FA13FD0620E6C5D8261EDF369FD3AB',
  database: {
    type: 'postgres',
    url: process.env.DATABASE_URL,
    synchronize: true,
    logging: true
  }
};

export const config: Config = env === 'production' ? productionConfig : localConfig;
