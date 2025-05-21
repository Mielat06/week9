import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());

dotenv.config();

const db = new pg.Pool({
  connectionString: process.env.DATABASE_CONNECTION_STRING,
});
app.get("/", (request, response) => {
  response.json("You have reached the root. Don't trip!");
});

app.get("/guests", async function (req, res) {
  const books = await db.query(`SELECT * FROM  guest book`);
  console.log(geusts.rows);
  res.json(geusts.rows);
});

app.post("/geusts", function (request, response) {
  console.log("POST route of /geusts has been hit");

  console.log("The request body is: ", request.body);

  const formValues = request.body;

  db.query(
    `
    INSERT INTO books_002 
    (name, email, message, ) 
    VALUES ($1, $2, $3, $4)`,
    [formValues.geustName, formValues.geustEmail, formValues.geustMessage]
  );
});

app.get("/guestsemailquery", async function (request, response) {
  const yearQuery = request.query.year;
  const queriedguests = await db.query(
    `SELECT * FROM Guests form WHERE email = $1`,
    [queriedGeusts]
  );
  response.json(queriedGeusts);
});
