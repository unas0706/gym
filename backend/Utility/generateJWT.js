import dotenv from "dotenv";

dotenv.config({
  path: "../.env",
});

const generateJWT = (user, res, message, statusCode) => {
  let cokkieName = user.role === "admin" ? "adminToken" : "userToken";
  let token = user.generateJWT();
  res
    .cookie(cokkieName, token, {
      // secure: true,
      // sameSite: "Lax",
      // maxAge: process.env.COOKIE_EXPIRY * 100 * 60 * 60 * 24,
      secure: true, // Ensures the cookie is only sent over HTTPS
      sameSite: "None", // Allows the cookie to be sent with cross-site requests
      maxAge: 7 * 24 * 60 * 60 * 1000, // Cookie expires in 7 days (milliseconds)
      path: "/", // The cookie is available for all paths on the domain
    })
    .status(statusCode)
    .json({
      sucess: true,
      message,
    });
};

export default generateJWT;
