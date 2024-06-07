import { createConnection } from "./database";
import { Connection } from "mysql2/promise";

const seed = async () => {
  let connection: Connection | null = null;
  try {
    connection = await createConnection();

    // Insérer des rôles dans la table des rôles
    await connection.query(`
      INSERT INTO role (role_name) VALUES
      ('Admin'),
      ('Worker'),
      ('Regular')
    `);

    // Insérer des utilisateurs dans la table des utilisateurs
    await connection.query(`
      INSERT INTO user (firstname, lastname, email, password, role_id) VALUES
      ('John', 'Doe', 'john.doe@example.com', 'password123', 1),
      ('Jane', 'Doe', 'jane.doe@example.com', 'password456', 2)
    `);

    // Insérer des articles dans la table des articles
    await connection.query(`
      INSERT INTO item (title, author, language) VALUES
      ('The Great Gatsby', 'F. Scott Fitzgerald', 'English'),
      ('To Kill a Mockingbird', 'Harper Lee', 'English'),
      ('1984', 'George Orwell', 'English'),
      ('Le Petit Prince', 'Antoine de Saint-Exupéry', 'French')
    `);

    console.log("Seed completed successfully");
  } catch (error) {
    console.error("Error during seeding:", (error as Error).message);
  } finally {
    if (connection) {
      await connection.end();
    }
  }
};

seed();
