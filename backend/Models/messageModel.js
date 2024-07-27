import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  Number: {
    type: String,
    required: true,
    maxLength: 10,
    minLength: 10,
  },
});

export const Message = mongoose.model("message", messageSchema);
