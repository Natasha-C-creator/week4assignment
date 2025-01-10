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

app.get("/messages", async function (request, response) {
  const messages = await db.query("SELECT * FROM messages WHERE id = 1");
  await response.json(messages.rows);
});