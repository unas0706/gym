import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  rating: {
    type: String,
  },
  content: {
    type: String,
  },
});

export const Review = mongoose.model("review", reviewSchema);
