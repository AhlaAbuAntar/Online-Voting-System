import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
dotenv.config();
app.use(cors());

const PORT = process.env.PORT;
mongoose.connect(process.env.CONNECTION_LINK!);

import voteRouter from "./routes/vote";
app.use("/vote", voteRouter);

app.listen(PORT, () => {
  `Listen to ${PORT}`;
});
