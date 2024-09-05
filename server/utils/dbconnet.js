import mongoose from "mongoose";

export const dbConnect = async () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("db connected successfully"))
    .catch((error) =>
      console.log("there is some error while connecting to db", error.message)
    );
};
