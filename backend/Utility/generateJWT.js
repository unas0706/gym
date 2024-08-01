import dotenv from "dotenv";

dotenv.config({
  path: "../.env",
});

const generateJWT = (user, res, message, statusCode) => {
  let cokkieName = user.role === "admin" ? "adminToken" : "userToken";
  let token = user.generateJWT();
  // res.cookie("authToken", "yourAuthToken", {
  //   secure: true, // Only set cookie over HTTPS
  //   sameSite: "None", // Allow cross-site cookies
  //   maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
  // });

  res
    .cookie(cokkieName, token, {
      httpOnly: true, // Makes the cookie inaccessible to JavaScript (XSS protection)
      secure: true, // Ensures the cookie is only sent over HTTPS
      sameSite: "None", // Allows cross-site usage
      maxAge: 24 * 60 * 60 * 1000, // Cookie expiration in milliseconds (1 day here)
      domain: "gym-frontend-56h0.onrender.com", // Specify the domain if needed
      path: "/", // Specify the path if needed
      // secure: true, // Only set cookie over HTTPS
      // sameSite: "None", // Allow cross-site cookies
      // maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
      // // sameSite: "None",
      // // secure: true, // Ensure HTTPS is used
      // // maxAge: process.env.COOKIE_EXPIRY * 1000 * 60 * 60 * 24,
    })
    .status(statusCode)
    .json({
      sucess: true,
      message,
      token,
    });
  console.log(cokkieName);
};

export default generateJWT;
