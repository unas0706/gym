import mongoose from "mongoose";
import bcrypt from "bcrypt";
import customError from "../Utility/CustomError.js";
import JsonWebToken from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({
  path: "../config.env",
});

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  Number: {
    type: String,
    required: [true, "Number is required"],
    unique: true,
    maxLength: [10, "Number must contain 10 digits"],
    minLength: [10, "Number must contain 10 digits"],
  },
  password: {
    type: String,
    select: false,
  },
  imgUrl: {
    type: String,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    required: true,
    default: "user",
  },
  gender: {
    type: String,
    enum: ["male", "female"],
  },
  age: {
    type: String,
  },
  month: [
    {
      height: {
        type: String,
      },
      weight: {
        type: String,
      },
      BFT: {
        type: String,
      },
      TBW: {
        type: String,
      },
      boneMass: {
        type: String,
      },
      MuscleMass: {
        type: String,
      },
      calories: {
        type: String,
      },
      BMI: {
        type: String,
      },
    },
  ],
});

UserSchema.pre("save", async function (next) {
  if (!this.isModified(!this.password)) return next();
  try {
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (error) {
    next(new customError(400, error.message));
  }
});

UserSchema.pre("findByIdAndUpdate", async function (next) {
  const update = this.getUpdate();
  if (update.password) {
    try {
      const salt = await bcrypt.genSalt(10);
      update.password = await bcrypt.hash(update.password, salt);
      this.setUpdate(update);
      next();
    } catch (error) {
      next(new customError(500, "Error hashing password"));
    }
  } else {
    next();
  }
});

UserSchema.pre("findOneAndUpdate", async function (next) {
  const update = this.getUpdate();
  if (update.password) {
    try {
      const salt = await bcrypt.genSalt(10);
      update.password = await bcrypt.hash(update.password, salt);
      this.setUpdate(update);
      next();
    } catch (error) {
      next(new customError(500, "Error hashing password"));
    }
  } else {
    next();
  }
});

UserSchema.methods.comparePassword = async function (pwd) {
  try {
    return await bcrypt.compare(pwd, this.password);
  } catch (error) {
    console.log(error.message);
  }
};

UserSchema.methods.generateJWT = function () {
  return JsonWebToken.sign({ id: this.id }, process.env.JWT_SCRETE_KEY, {
    expiresIn: process.env.JWT_EXPIRY,
  });
};

const User = mongoose.model("user", UserSchema);

export default User;
