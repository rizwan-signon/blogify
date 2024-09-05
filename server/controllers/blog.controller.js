import fs from "fs";
import Blog from "../models/blog.model.js";
export const createBlog = async (req, res, next) => {
  const { originalname, path } = req.file;
  const { title, author, description, createdBy } = req.body;
  const parts = originalname.split(".");
  const ext = parts[parts.length - 1];
  const pathName = path + "." + ext;
  fs.renameSync(path, pathName);
  const newBlog = await new Blog({
    title,
    author,
    description,
    createdBy,
    image: pathName,
  });
  await newBlog.save();
  res.json(newBlog);
};

export const getBlogs = async (req, res, next) => {
  const blogs = await Blog.find();
  res.json(blogs);
};

//update blog
export const getLoggedInBlogs = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const posts = await Blog.find({ createdBy: userId });
    res.json(posts);
  } catch (error) {
    next(error);
  }
};
