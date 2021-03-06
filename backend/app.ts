import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import voteRouter from "./routes/vote";

const app = express();
dotenv.config();
app.use(cors());

const PORT = 3000;
mongoose.connect(process.env.CONNECTION_LINK!);

app.get("/", (req, res) => {
  res.send("API started").status(200);
});

app.use("/vote", voteRouter);

app.listen(PORT, () => {
  `Listen to ${PORT}`;
});
