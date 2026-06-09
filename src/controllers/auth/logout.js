import asyncHandler from "../../utils/asyncHandler.js";
import apiError from "../../utils/apiError.js";
import blacklist_model from "../../models/blacklist_token.model.js";
const logout =asyncHandler( async(req,res,next)=>{
const token = req.cookies.auth_token;
if(!token) return next(new apiError(400,"token not recieved"))
    const blacklist_token = await  blacklist_model.create({
token})



res.clearCookie("auth_token");

res.status(200).json({message:"logout successfull",success:true})



})
export default logout