import express from "express";
const router = express.Router();
import { Vote } from "../models/vote-model";

//Get votes
router.get("/", async (req, res) => {
  try {
    const votes = await Vote.find();
    res.send({
      status_code: res.statusCode,
      data: votes,
    });
  } catch (err) {
    res.send({
      status_code: res.statusCode,
      message: err,
    });
  }
});

//Post vote
router.post("/", async (req, res) => {
  try {
    const vote = req.body;
    const newVote = new Vote({
      vote: vote.vote,
      vote_name: vote.vote_name,
      date: Date.now(),
    });

    await newVote.save();

    res.send({
      status_code: res.statusCode,
      message: "Vote saved successfully",
      data: vote,
    });
  } catch (err) {
    res.send({
      status_code: res.statusCode,
      message: err,
    });
  }
});

export default router;
