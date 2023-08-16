import pg from "pg";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

const {DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE} = process.env;
console.log(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE);

//console.log(fs.readFileSync('./SSL-certificate/root-certs.crt').toString());

export const client = new pg.Pool({
    user: DB_USER,
    password: DB_PASSWORD,
    host: DB_HOST,
    database: DB_DATABASE,
    connectionString: "postgres://my-unsplash-main-db-06810274662d31db1:FBQTcEVdETRg85VmY3td2eZNs8UByK@user-prod-us-east-2-1.cluster-cfi5vnucvv3w.us-east-2.rds.amazonaws.com:5432/my-unsplash-main-db-06810274662d31db1",
    ssl: {
        rejectUnauthorized: false,
        ca: fs.readFileSync('./SSL-certificate/root-certs.crt').toString(),
    }
})