import pg from "pg";
import * as dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

if (!process.env.AUTH_DATABASE_URL) {
  throw new Error("AUTH_DATABASE_URL is missing");
}

export const authPool = new Pool({
  connectionString: process.env.AUTH_DATABASE_URL,
});
