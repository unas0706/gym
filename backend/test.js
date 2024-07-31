const express = require("express");
const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: [
      "https://gym-frontend-56h0.onrender.com", // Your deployed frontend
      "https://uagym.netlify.app", // Another deployed frontend or subdomain
      "http://127.0.0.1:5173", // Local development
    ],
    methods: ["POST", "GET", "PUT", "DELETE", "PATCH"],
    credentials: true, // Allow cookies to be sent
  })
);

app.get("/set-cookie", (req, res) => {
  res
    .cookie("authToken", "yourAuthToken", {
      //   httpOnly: true, // Prevent JavaScript access
      secure: true, // Only set cookie over HTTPS
      sameSite: "None", // Allow cross-site cookies
      maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
    })
    .send("Cookie is set");
});
