import pg from "pg";

const { Pool } = pg;

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is missing");
}

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function query(
  text: string,
  params?: unknown[]
) {
  return pool.query(text, params);
}