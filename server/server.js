import express from "express";
import pg from "pg";
import dotenv from "dotenv";
import cors from "cors";

const app = express();

app.listen(3000, function () {
  console.log("Server is listening on port 3000...");
});

dotenv.config();

const db = new pg.Pool({
  connectionString: process.env.DB_CONN_STRING,
});

app.get("/visitorcomments", async function (request, response) {
  const comments = await db.query("SELECT * FROM comments WHERE id = 1");
  await response.json(comments.rows);
});
