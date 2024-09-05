import { Router } from "express";
import multer from "multer";
import {
  createBlog,
  getBlogs,
  getLoggedInBlogs,
} from "../controllers/blog.controller.js";
const uplaod = multer({ dest: "uploads/" });
const router = Router();
router.post("/createblog", uplaod.single("image"), createBlog);
router.get("/getblogs", getBlogs);
router.get("/getloggedinblogs/:userId", getLoggedInBlogs);
export default router;
