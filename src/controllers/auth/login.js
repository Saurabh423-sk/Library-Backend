import user_model from "../../models/user_model.js";
import bcrypt from "bcrypt";
import token from "../../utils/token.js";
import asyncHandler from "../../utils/asyncHandler.js";
import apiError from "../../utils/apiError.js";

const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await user_model.findOne({ email }).select("+password");

  if (!user) {
    return next(new apiError(404, "Invalid credential! user not found."));
  }

  const compare = await bcrypt.compare(password, user.password);

  if (!compare) {
    return next(new apiError(404, "Invalid credential! user not found."));
  }

  if (user.isverify === false) {
    return next(new apiError(401, "Email not verified"));
  }

  if (user.isactive === false) {
    return next(new apiError(401, "Admin approval required."));
  }

  const auth_token = token(user);

  if (!auth_token) {
    return res.json({ message: "try again" });
  }

  // 🔥 FIXED COOKIE
  res.cookie("auth_token", auth_token, {
    httpOnly: true,
    secure: false,        // 🔥 IMPORTANT (dev के लिए)
    sameSite: "lax",      // 🔥 IMPORTANT
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  res.status(200).json({
    user: {
      id: user._id,
      fullname: user.fullname,
      phone_no: user.phone_no,
      email: user.email,
      roll_no: user.roll_no,
      sem: user.sem,
      department: user.department,
      role: user.role,
      isActive: user.isactive,
    },
    message: "login successful",
    success: true,
  });
});

export default login;