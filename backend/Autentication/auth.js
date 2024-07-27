import JsonWebToken from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../Models/UserModel.js";
import asyncErrorHandler from "../Utility/asyncErrorHandler.js";
import customError from "../Utility/CustomError.js";

dotenv.config({
  path: "../config.env",
});

const auth = (role) => {
  return asyncErrorHandler(async (req, res, next) => {
    let cookieName = role === "admin" ? "adminToken" : "userToken";
    let cookie = req.cookies[cookieName];
    if (!cookie) {
      return next(new customError(400, "Your not Logged In  "));
    }
    let id = JsonWebToken.verify(cookie, process.env.JWT_SCRETE_KEY);
    if (!id) return next(new customError(400, "Your not authorized "));
    let user = await User.findById(id.id);
    if (!user) return next(new customError(400, "Your not authorized "));
    req.user = user;
    return next();
  });
};

export default auth;
