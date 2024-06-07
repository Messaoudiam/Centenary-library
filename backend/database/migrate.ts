import { createConnection } from "./database";
import fs from "fs";
import path from "path";
import { Connection } from "mysql2/promise";

const schemaPath = path.join(__dirname, "schema.sql");

const migrate = async () => {
  let connection: Connection | null = null;
  try {
    const sql = fs.readFileSync(schemaPath, "utf8");

    connection = await createConnection();

    await connection.query(
      `DROP DATABASE IF EXISTS \`${process.env.DB_NAME}\``
    );
    await connection.query(`CREATE DATABASE \`${process.env.DB_NAME}\``);
    await connection.query(`USE \`${process.env.DB_NAME}\``);
    await connection.query(sql);

    console.info(`${process.env.DB_NAME} updated from ${schemaPath} 🆙`);
  } catch (err) {
    console.error("Error updating the database:", (err as Error).message);
  } finally {
    if (connection) {
      await connection.end();
    }
  }
};

migrate();
