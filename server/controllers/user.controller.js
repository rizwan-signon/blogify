import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const createUser = async (req, res, next) => {
  try {
    const { password, ...rest } = req.body;
    const newUser = new User({
      password: bcrypt.hashSync(password, 10),
      ...rest,
    });
    await newUser.save();
    res.json(newUser);
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    if (!email || !password)
      throw new Error("type email and password to verify");
    const validUser = await User.findOne({ email: email });
    const validPass = bcrypt.compareSync(password, validUser.password);
    if (!validUser || !validPass) throw new Error("wrong data try again");
    const { password: pass, ...rest } = validUser._doc;
    const token = jwt.sign({ rest }, process.env.SECRET, {
      expiresIn: "3d",
    });
    res.cookie("jwt", token, {
      maxAge: 3 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });

    res.json(rest);
  } catch (error) {
    next(error);
  }
};

export const logOutUser = async (req, res, next) => {
  try {
    res.cookie("jwt", "");
    res.json("user logout successfully");
  } catch (error) {
    next(error);
  }
};
