import pg from "pg";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

const {DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, CONNECTION_STRING} = process.env;
console.log(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, CONNECTION_STRING);

//console.log(fs.readFileSync('./SSL-certificate/root-certs.crt').toString());

export const client = new pg.Pool({
    user: DB_USER,
    password: DB_PASSWORD,
    host: DB_HOST,
    database: DB_DATABASE,
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false,
        ca: fs.readFileSync('./SSL-certificate/root-certs.crt').toString(),
    }
})