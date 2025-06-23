import express from "express";
import dotenv from "dotenv";
import characterRouter from "./src/routes/character.routes.js";
import initDB from "./db.js";

dotenv.config();

const app = express()
const port = process.env.PORT;

app.use(express.json())

app.use("/", characterRouter);

initDB().then(() => {
    app.listen(port, () => {
  console.log(`Corriendo en http://localhost:${port}/`);
 });
});

