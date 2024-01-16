import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import mongoose from "mongoose";
import chatRoute from "./Route.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(process.env.PORT, () =>
  console.log(`Server running on port: ${process.env.PORT}`)
);
app.use('/api',chatRoute)
mongoose
  .connect(process.env.CONNECTION_URL) 
  .then(() => console.log("Database Connected successfully"))
  .catch((err) => console.log(err));

