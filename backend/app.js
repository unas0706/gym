import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./Routers/router.js";
import ErrorMiddleware from "./Middlewares/ErrorMiddleware.js";
import registerRouter from "./Routers/registerRouter.js";
import cloudinary from "cloudinary";

dotenv.config({
  path: "./.env",
});

const app = express();

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRETE,
});

app.use(cookieParser());

app.use(
  cors({
    origin: [
      "https://gym-frontend-56h0.onrender.com",
      "https://uagym.netlify.app",
      "http://127.0.0.1:5173",
    ],
    methods: ["POST", "GET", "PUT", "DELETE", "PATCH"],
    credentials: true,
    sameSite: "None",
    secure: true,
  })
);

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(router);
app.use(registerRouter);

app.use(ErrorMiddleware);

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
    .cookie("authToken", "", {
      secure: true, // Only set cookie over HTTPS
      sameSite: "None", // Allow cross-site cookies
      maxAge: 0, // 1 day in milliseconds
    })
    .send("Cookie is set");
});

export default app;
