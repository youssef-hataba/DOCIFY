import express from "express";
import cors from "cors";
import "dotenv/config";

// app confing
const app = express();
const port = process.env.PORT || 8000;

// middlewares
app.use(express.json());
app.use(cors());

// api endpoints
app.get("/", (req, res) => {
  res.send("API WORKING test");
});

app.listen(port, () => {
  console.log("Server listening on port :", port);
});
