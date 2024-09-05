import token from "jsonwebtoken";
export const verifyToken = async (req, res, next) => {
  const { jwt } = req.cookies;
  try {
    token.verify(jwt, process.env.SECRET, (err, user) => {
      if (err) throw new Error("invalid token");
      req.user = user;
      next();
    });
  } catch (error) {
    next(error);
  }
};
