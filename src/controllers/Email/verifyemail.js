import user_model from "../../models/user_model.js";
import apiError from "../../utils/apiError.js";
import asyncHandler from "../../utils/asyncHandler.js";

const verifyEmail = asyncHandler(async (req, res, next) => {
  const { token } = req.query;

  const user = await user_model.findOne({
    verifyToken: token,
    verifyTokenExpiry: { $gt: Date.now() }
  });

  if (!user) {
    return next(new apiError(400, "Invalid or expired token"));
  }

  if (user.isverify) {
    return res.send("Email already verified");
  }

  user.isverify = true;
  user.verifyToken = undefined;
  user.verifyTokenExpiry = undefined;

  await user.save();

  return res.redirect("https://brabu-library123.netlify.app");
});

export default verifyEmail;