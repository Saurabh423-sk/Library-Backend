
import user_model from "../../models/user_model.js";
import apiError from "../../utils/apiError.js";
import asyncHandler from "../../utils/asyncHandler.js";

const signup = asyncHandler(async (req, res,next) => {

     const { fullname, phone_no, email, roll_no, sem, department, password } = req.body;

  const isuserAlreadyExist = await user_model.findOne({
    $or:[
      {email},
      {phone_no}
    ]
  })

  if (isuserAlreadyExist) {

    return next(new apiError(400,"Invalid Credentials"))

  }


  const user = await user_model.create({
    fullname,
    phone_no,
    email,
    roll_no,
    sem,
    department,
    password,
    isverify:true
  });








res.status(201).json({
   user: {
    id: user._id,
    fullname: user.fullname,
    phone_no: user.phone_no,
    email: user.email,
    roll_no: user.roll_no,
    sem: user.sem,
    department: user.department,
    role: user.role,
    isverify:user.isverify,
    isActive: user.isactive
  },
    message: "Registered successfully! Please check your email and verify your account.",
    success:true
})
 

})

export default signup;
