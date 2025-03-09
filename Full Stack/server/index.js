import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import connectDB from "./config/connectDb.js";

dotenv.config();

const app = express();
app.use(cors());
app.options("*", cors());

app.use(express.json());
app.use(cookieParser());
app.use(morgan());
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);

app.get("/", (request, response) => {
  response.json({
    message: "Server is running" + process.env.PORT,
  });
});

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("Server is running", process.env.PORT);
  });
});
