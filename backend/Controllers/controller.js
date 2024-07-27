import { Message } from "../Models/messageModel.js";
import { Review } from "../Models/reviewModel.js";
import User from "../Models/UserModel.js";
import asyncErrorHandler from "../Utility/asyncErrorHandler.js";
import customError from "../Utility/CustomError.js";

export const getAllUsers = asyncErrorHandler(async (req, res, next) => {
  const users = await User.find({ role: "user" });
  res.status(200).json({
    sucess: true,
    data: users,
  });
});

export const getAlladmins = asyncErrorHandler(async (req, res, next) => {
  const users = await User.find({ role: "admin" });
  res.status(200).json({
    sucess: true,
    data: users,
  });
});

export const addAdmin = asyncErrorHandler(async (req, res, next) => {
  let { name, Number, role } = req.body;
  req.body.password = Number;
  if (!name || !Number || !role) {
    return next(new customError(400, "Please fill all the details"));
  }
  const user = await User.findOne({ Number });
  if (user) {
    return next(new customError(400, "Admin Already exists"));
  }

  await User.create(req.body);
  res.status(200).json({
    sucess: true,
    message: role + " created successfully",
  });
});

export const deleteUser = asyncErrorHandler(async (req, res, next) => {
  await User.findByIdAndDelete(req.params.id);
  res.status(200).json({
    sucess: true,
    message: "User deleted successfully",
  });
});

export const updateUser = asyncErrorHandler(async (req, res, next) => {
  const updateData = req.body;
  if (!updateData || Object.keys(updateData).length === 0) {
    return res.status(400).json({
      success: false,
      message: "No update data provided",
    });
  }
  const userId = req.params.id;
  if (!userId) {
    return res.status(400).json({
      success: false,
      message: "User ID is required",
    });
  }

  let user = await User.findByIdAndUpdate(req.params.id, req.body);
  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found",
    });
  }
  res.status(200).json({
    sucess: true,
    message: "User updated successfully",
  });
});

export const singleUser = (req, res, next) => {
  res.status(200).json({
    sucess: true,
    user: req.user,
  });
};

export const sendMessage = asyncErrorHandler(async (req, res, next) => {
  const { name, Number } = req.body;
  if (!name && !Number) {
    return next(new customError(400, "Please Fill the form"));
  }
  await Message.create(req.body);
  res.status(200).json({
    sucess: true,
    message: "Message Sent Sucessfully",
  });
});

export const getAllMessages = async (req, res, next) => {
  const messages = await Message.find();
  res.status(200).json({
    sucess: true,
    data: messages,
  });
};

export const deleteMessages = async (req, res, next) => {
  let id = req.params.id;
  if (!id) {
    return new customError(400, "Please Enter the ID");
  }
  const msg = await Message.findById(id);
  if (!msg) {
    return new customError(400, "No Message was Found");
  }
  await Message.findByIdAndDelete(id);
  res.status(200).json({
    sucess: true,
    message: "Message Deleted Sucessfully",
  });
};

export const getReviews = asyncErrorHandler(async (req, res, next) => {
  const reviews = await Review.find();
  res.status(200).json({
    sucess: true,
    reviews,
  });
});

export const writeReview = asyncErrorHandler(async (req, res, next) => {
  let { name, content } = req.body;
  if (!name && !content) {
    return next(new customError(400, "Please fill the form"));
  }
  await Review.create(req.body);
  res.status(200).json({
    sucess: true,
    message: "Review saved sucessfully",
  });
});

export const deleteReview = asyncErrorHandler(async (req, res, next) => {
  let id = req.params.id;

  if (!req.params.id) {
    return next(new customError(400, "Can`t find the Review"));
  }
  const review = await Review.findById(req.params.id);
  if (!review) {
    return next(new customError(400, "Can`t find the Review"));
  }
  await Review.findByIdAndDelete(id);
  res.status(200).json({
    sucess: true,
    message: "Review deleted sucessfully",
  });
});
