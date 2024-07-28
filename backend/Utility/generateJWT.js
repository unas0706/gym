import dotenv from "dotenv";

dotenv.config({
  path: "../.env",
});

const generateJWT = (user, res, message, statusCode) => {
  let cokkieName = user.role === "admin" ? "adminToken" : "userToken";
  let token = user.generateJWT();
  console.log(token);
  res
    .cookie(cokkieName, token, {
      httpOnly: true, // Prevents JavaScript access to the cookie
      secure: true, // Ensures cookies are sent only over HTTPS
      sameSite: "none",
      maxAge: process.env.COOKIE_EXPIRY * 100 * 60 * 60 * 24,
    })
    .status(statusCode)
    .json({
      sucess: true,
      message,
    });
};

export default generateJWT;
