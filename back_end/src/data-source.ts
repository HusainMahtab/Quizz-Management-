import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
import { User } from './models/User';
import { Quiz } from './models/Quiz';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true, 
  logging: false, 
  entities: [User, Quiz], 
  migrations: [], 
  subscribers: [], 
});