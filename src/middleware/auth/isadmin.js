import user_model from "../../models/user_model.js";
import jwt from "jsonwebtoken";

const admin_auth = async (req, res, next) => {
  try {
    const token = req.cookies.admin_token || req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "No token provided",
      });
    }

    const decode = jwt.verify(token, process.env.KEY);
    req.user = decode;

    const user = await user_model.findById(req.user.userid);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (user.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Only admin can access",
      });
    }

    next();
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export default admin_auth;