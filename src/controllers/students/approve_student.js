import user_model from "../../models/user_model.js"
import mongoose from "mongoose"
import sendMail from "../../utils/EMAIL/sendemail.js";
import asyncHandler from "../../utils/asyncHandler.js";
import apiError from "../../utils/apiError.js";
import { studentActivated_msg } from "../../utils/EMAIL/msg.js";
const approve_student=asyncHandler(async (req,res,next)=>{

    const id = new mongoose.Types.ObjectId(req.params.id);

    const result = await user_model.findById(id);

    if(!result)return next(new apiError(404,"user not found"))
    let active=null;
        if(result.isactive ==true ){
            active= false
        }else{
            active=true
        }
    

    const update = await user_model.findByIdAndUpdate(id,{$set:{isactive:active}},
        { new: true, runValidators: true })
  res.status(200).json({message:"status updated",update,success:true})
if(update.isactive){
   return  sendMail(update.email,"Library Account Approved ✅",studentActivated_msg)
}


  



})

export default approve_student