import asyncErrorHandler from "../Utility/asyncErrorHandler.js";
import User from "../Models/UserModel.js";
import customError from "../Utility/CustomError.js";
import generateJWT from "../Utility/generateJWT.js";
import cloudinary from "cloudinary";

export const userRegister = asyncErrorHandler(async (req, res, next) => {
  const { name, Number, role } = req.body;
  if (!name || !Number || !role) {
    return next(new customError(400, "Please fill all the categories"));
  }
  const user = await User.findOne({ Number, role });
  if (user) {
    return next(new customError(400, "User Already exists"));
  }
  req.body.password = Number;
  // let file = req.files.image;
  // console.log(file);
  // let result = await cloudinary.uploader.upload(file.tempFilePath);
  // console.log(result);
  const user1 = await User.create(req.body);
  console.log(user1);
  res.status(200).json({
    sucess: true,
    message: "User registered successfully",
  });
});

export const userLogin = asyncErrorHandler(async (req, res, next) => {
  let { Number, password, role } = req.body;
  if (!Number || !password || !role) {
    return next(new customError(400, "Please fill the form"));
  }
  const user = await User.findOne({ Number }).select("+password");
  if (!user) {
    return next(
      new customError(400, "No user available with this credentails")
    );
  }
  let compwd = await user.comparePassword(password);
  if (!compwd) {
    return next(new customError(400, "Please provide proper Credentials"));
  }
  if (user.role !== role) {
    return next(
      new customError(400, "No user available with this credentails")
    );
  }
  generateJWT(user, res, "Logged In", 200);
});

export const changepassword = asyncErrorHandler(async (req, res, next) => {
  let { password, changePassword, confirmPassword } = req.body;

  if (!password || !changePassword || !confirmPassword) {
    return next(new customError(400, "Please fill all categories"));
  }
  if (changePassword !== confirmPassword) {
    return next(
      new customError(
        400,
        "Both change password and confirm password must be same"
      )
    );
  }
  const user = await User.findById(req.params.id).select("+password");
  let compwd = await user.comparePassword(password);
  if (!compwd) {
    return next(new customError(400, "Your old password is wrong"));
  }
  await User.findByIdAndUpdate(
    req.params.id,
    { password: changePassword },
    { runValidators: true }
  );
  res.status(200).json({
    sucess: true,
    message: "changed password sucessfully",
  });
});

export const logout = (req, res, next) => {
  let cokkieName = req.user.role === "admin" ? "adminToken" : "userToken";
  res
    .status(200)
    .cookie(cokkieName, "", {
      expires: new Date(0),
    })
    .json({
      sucess: true,
      message: "Logged out sucessfully",
    });
};
