import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({
  path: "./config.env",
});

const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "gym",
    })
    .then(() => {
      console.log("Connected to database");
    })
    .catch((err) => {
      console.log(err);
    });
};

export default connectDB;
