import dotenv from "dotenv";

dotenv.config({
  path: "../.env",
});

const generateJWT = (user, res, message, statusCode) => {
  let cokkieName = user.role === "admin" ? "adminToken" : "userToken";
  let token = user.generateJWT();
  res
    .cookie(cokkieName, token, {
      secure: true,
      sameSite: "Lax",
      maxAge: process.env.COOKIE_EXPIRY * 100 * 60 * 60 * 24,
    })
    .status(statusCode)
    .json({
      sucess: true,
      message,
    });
};

export default generateJWT;
