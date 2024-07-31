import dotenv from "dotenv";

dotenv.config({
  path: "../.env",
});

const generateJWT = (user, res, message, statusCode) => {
  let cokkieName = user.role === "admin" ? "adminToken" : "userToken";
  let token = user.generateJWT();
  res
    .cookie(cokkieName, token, {
      sameSite: "None",
      secure: true, // Ensure HTTPS is used
      maxAge: process.env.COOKIE_EXPIRY * 1000 * 60 * 60 * 24,
    })
    .status(statusCode)
    .json({
      sucess: true,
      message,
    });
  console.log(cokkieName);
};

export default generateJWT;
