import dotenv from 'dotenv';
dotenv.config();

export const config = {
  baseUrl: process.env.BASE_URL || 'https://www.saucedemo.com/v1/index.html',
  defaultUser: process.env.USERNAME || 'standard_user',
  defaultPass: process.env.PASSWORD || 'secret_sauce',
};