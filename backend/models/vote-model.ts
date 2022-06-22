import { Timestamp } from "mongodb";
import { Schema, model } from "mongoose";

export interface IVote {
  vote: string;
  date: Timestamp;
}

export const voteSchema = new Schema<IVote>({
  vote: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

export const Vote = model<IVote>("Vote", voteSchema);
