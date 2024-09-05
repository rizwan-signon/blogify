import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  userName: {
    type: String,
  },
  address: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);
export default User;
