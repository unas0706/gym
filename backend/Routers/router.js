import express from "express";
import {
  addAdmin,
  deleteUser,
  getAllUsers,
  singleUser,
  getAlladmins,
  updateUser,
  sendMessage,
  getAllMessages,
  deleteMessages,
  getReviews,
  writeReview,
  deleteReview,
} from "../Controllers/controller.js";
import auth from "../Autentication/auth.js";
import { userRegister } from "../Controllers/registrationController.js";

const router = express.Router();

router.get("/allUsers", auth("admin"), getAllUsers);
router.post("/sendMessage", sendMessage);
router.get("/getAllreviews", getReviews);
router.post("/writeReview", auth("user"), writeReview);
router.get("/allAdmins", auth("admin"), getAlladmins);
router.post("/addAdmin", auth("admin"), addAdmin);
router.post("/adduser", auth("admin"), userRegister);
router.patch("/updateUser/:id", auth("admin"), updateUser);
router.delete("/deleteUser/:id", auth("admin"), deleteUser);
router.delete("/deletereview/:id", auth("admin"), deleteReview);
router.get("/singleUser", auth("user"), singleUser);
router.get("/getAllMessages", auth("admin"), getAllMessages);
router.delete("/deleteMessage/:id", auth("admin"), deleteMessages);

export default router;
