import jwt from "jsonwebtoken";

const token = (user) => {
 return jwt.sign(
    { userid:user._id, isactive:user.isactive},
    process.env.KEY,
    { expiresIn: "4d" },
  );
};

export default token;
