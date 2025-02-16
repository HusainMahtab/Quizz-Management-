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
  ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false,
});

const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgresql://quiz_db_b5yp_user:gSIxJV9IX9Cj4pDP71Gkv6typvrF7SuJ@dpg-cuoosnhopnds738u3v90-a/quiz_db_b5yp',
  ssl: {
    rejectUnauthorized: false // Only needed for SSL connections
  }
});

client.connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .then(() => client.query('SELECT * FROM "user"'))
  .then((res: { rows: any; }) => console.log(res.rows))
  .catch((err: any) => console.error(err))
  .finally(() => client.end());
