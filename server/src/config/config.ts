import dotenv from 'dotenv';

dotenv.config(); // load enviroment variable from .env file

export const config = {
  port: process.env.PORT ? Number(process.env.PORT) : 3000,
  secret_key: String(process.env.SECRET_KEY),
};
