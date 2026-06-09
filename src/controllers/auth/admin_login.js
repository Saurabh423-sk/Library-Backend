import user_model from "../../models/user_model.js";
import bcrypt from "bcrypt"
import token from "../../utils/token.js"
import asyncHandler from "../../utils/asyncHandler.js";
import apiError from "../../utils/apiError.js";
const admin = asyncHandler( async (req, res,next) => {

    const { email, password } = req.body;

    

    const user = await user_model.findOne({ email }).select("+password");
    if (!user)
      return next(new apiError(404,"user not found"))

   

    const compare = await bcrypt.compare(password, user.password);

    if (!compare)
      return next(new apiError(401,"Invalid Credentials! Email or Password is wrong"))

    if (user.role !== "admin")
      return next(new apiError(403,"Admin Access Only"))

    const admin_token = token(user);

    res.cookie("admin_token", admin_token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({ message: "Admin login successful",success:true });

  
})

export default admin