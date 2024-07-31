import dotenv from "dotenv";

dotenv.config({
  path: "../.env",
});

const generateJWT = (user, res, message, statusCode) => {
  let cokkieName = user.role === "admin" ? "adminToken" : "userToken";
  let token = user.generateJWT();
  res.header(
    "Access-Control-Allow-Origin",
    "https://gym-frontend-56h0.onrender.com"
  ); // Replace with your client URL
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res
    .cookie(cokkieName, token, {
      sameSite: "None",
      secure: true, // Ensure HTTPS is used
      httpOnly: true,
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
