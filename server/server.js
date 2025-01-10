import express from "express";
import pg from "pg";
import dotenv from "dotenv";
import cors from "cors";

const app = express();

app.listen(5174, function () {
  console.log("Server is listening on port 5174 ...");
});

dotenv.config();

const db = new pg.Pool({
  connectionString: process.env.DB_CONN_STRING,
});

app.get("/visitorcomments", async function (request, response) {
  const comments = await db.query("SELECT * FROM comments WHERE id = 1");
  await response.json(comments.rows);
});

app.post("/new-data", async (req, res) => {
  const data = req.body;
  const query = await db.query(
    `INSERT INTO visitorcomments (col,col2,col3) VALUES($1, $2, $3)`,
    [data.input1, data.input2, data.input3]
  );
  await res.json(query.rows);
});
