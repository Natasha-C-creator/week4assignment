// FROM SUPABASE:

// CREATE TABLE comments (
//   id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
//   firstname VARCHAR(255),
//   comment TEXT,
//   rating VARCHAR(10)
// );

// INSERT INTO "comments" ("FirstName", "Comments", "Rating")
// VALUES
// ('Natasha', 'Loved it', '5'),
// ('John', 'Not sure', '2')

import { db } from "./server.js";

// db.query(
//   `INSERT INTO \`comments\` (firstName, comments, rating) VALUES ('Natasha','Great','5')`
// );
