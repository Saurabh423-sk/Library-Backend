import entry_exit_model from "../../models/entry-exit_model.js"
import user_model from "../../models/user_model.js";
import apiError from "../../utils/apiError.js";
import asyncHandler from "../../utils/asyncHandler.js";
const entry_exit= asyncHandler(async(req,res,next)=>{

 
       const userid = req.user.userid;
     const id = req.params.id;
     
     const isUser = await user_model.findById(userid);
     if(!isUser)return next(new apiError(404,"user not found"))


         const lastRecord = await entry_exit_model
      .findOne({ userid })
      .sort({ createdAt: -1 });


if(lastRecord && lastRecord.action == id) return next(new apiError(400,`you already requested for ${id}`)) 

    const result =await entry_exit_model.create({
           userid,
           action:id,
    }) 


    res.status(201).json({
        message:`your ${id} request is successful`,
        success:true
    })






})

export default entry_exit