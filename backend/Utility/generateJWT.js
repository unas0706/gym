import dotenv from "dotenv";

dotenv.config({
  path: "../.env",
});

const generateJWT = (user, res, message, statusCode) => {
  let cokkieName = user.role === "admin" ? "adminToken" : "userToken";
  let token = user.generateJWT();
  res
    .cookie(cokkieName, token, {
      sameSite: "none",
      secure: true,
      domain: "https://gym-frontend-56h0.onrender.com",
      maxAge: process.env.COOKIE_EXPIRY * 100 * 60 * 60 * 24,
    })
    .status(statusCode)
    .json({
      sucess: true,
      message,
    });
  console.log(cokkieName);
};

export default generateJWT;
