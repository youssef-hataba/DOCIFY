import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCLoudinary from "./config/cloudinary.js";

// app confing
const app = express();
const port = process.env.PORT || 8000;
connectDB();
connectCLoudinary();

// middlewares
app.use(express.json());
app.use(cors());

// api endpoints
app.get("/", (req, res) => {
  res.send("API WORKING test2");
});

app.listen(port, () => {
  console.log("Server listening on port :", port);
});
