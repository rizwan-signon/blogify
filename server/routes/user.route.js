import {
  createUser,
  loginUser,
  logOutUser,
} from "../controllers/user.controller.js";
import { Router } from "express";
import { verifyToken } from "../utils/verifyUser.js";
const router = Router();
router.post("/registeruser", createUser);
router.post("/login", loginUser);
router.post("/logout", verifyToken, logOutUser);
export default router;
