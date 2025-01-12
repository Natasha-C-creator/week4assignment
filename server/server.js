import express from "express";
import pg from "pg";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

// const express = require("express");
const app = express();
const PORT = process.env.PORT || 5174;

export const db = new pg.Pool({
  connectionString: process.env.DB_CONN_STRING,
});

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

// console.log("Server is running on port 5173");

app.post("/comments", async (req, res) => {
  try {
    console.log("Received data:", req.body);
    const data = req.body;
    const query = await db.query(
      `INSERT INTO comments (firstname, comment, rating) VALUES($1, $2, $3)`,
      [data.firstname, data.comment, data.rating]
    );
    res.json(query.rows);
  } catch (err) {
    console.error("Error inserting comment:", err);
    alert("Sorry, there was an issue. Please try again.");
    res.status(500).json({ error: "Error inserting comment" });
  }
});

app.get("/comments", async (req, res) => {
  try {
    const comments = await db.query("SELECT * FROM comments");
    console.log(comments.rows);
    res.json(comments.rows);
  } catch (err) {
    console.error("Error fetching comments:", err);
    res.status(500).json({ error: "Error fetching comments" });
  }
});

app
  .listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  })
  .on("error", (err) => {
    console.error("Error starting server:", err);
  });

// app.get("/comments", async function (request, response) {
//   const comments = await db.query("SELECT * FROM comments");
//   await response.json(comments.rows);
// });
