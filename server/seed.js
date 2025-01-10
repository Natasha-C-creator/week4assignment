// FROM SUPABASE:

// INSERT INTO "visitor comments" ("FirstName", "Comments", "Rating")
// VALUES
// ('Natasha', 'Loved it', '5'),
// ('John', 'Not sure', '2')

import { db } from "./server.js";

db.query(
  `INSERT INTO \`visitor comments\` (FirstName, Comments, Rating) VALUES ('Natasha','Great','5')`
);
