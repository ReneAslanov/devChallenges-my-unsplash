import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const {DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE} = process.env;
console.log(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE);

export const client = new pg.Pool({
    user: DB_USER,
    password: DB_PASSWORD,
    host: DB_HOST,
    database: DB_DATABASE
})