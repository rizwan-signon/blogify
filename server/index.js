import express from "express";
import { dbConnect } from "./utils/dbconnet.js";
import { config } from "dotenv";
import blogRoutes from "./routes/blog.route.js";
import userRoutes from "./routes/user.route.js";
import { errorHandler } from "./utils/error.js";
import cookieParser from "cookie-parser";
config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
dbConnect();
app.use(cookieParser());
app.use("/api", blogRoutes);
app.use("/api", userRoutes);
app.use(errorHandler);
app.listen(PORT, () => console.log(`the app is listening on port ${PORT}`));
