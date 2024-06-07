import dotenv from "dotenv";
import mysql, { Connection } from "mysql2/promise";

dotenv.config();

export const createConnection = async (): Promise<Connection> => {
  return mysql.createConnection({
    host: process.env.DB_HOST!,
    port: parseInt(process.env.DB_PORT!),
    user: process.env.DB_USER!,
    password: process.env.DB_PASSWORD!,
    database: process.env.DB_NAME!,
    multipleStatements: true,
  });
};
