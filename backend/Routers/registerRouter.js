import express from "express";
import {
  changepassword,
  userLogin,
  logout,
} from "../Controllers/registrationController.js";
import auth from "../Autentication/auth.js";

const registerRouter = express.Router();

registerRouter.post("/userLogin", userLogin);
registerRouter.get("/userLogout", auth("user"), logout);
registerRouter.get("/adminLogout", auth("admin"), logout);
registerRouter.patch("/changepassword/:id", auth("user"), changepassword);

export default registerRouter;
