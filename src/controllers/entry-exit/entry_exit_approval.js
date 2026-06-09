import entry_exit_model from "../../models/entry-exit_model.js"
import mongoose from "mongoose"
import asyncHandler from "../../utils/asyncHandler.js"
const approve_entry_exit=asyncHandler(async (req,res,next)=>{
    const id =new mongoose.Types.ObjectId(req.params.id);
    const result = await entry_exit_model.findById(id);
    if(!result)return next(new apiError(404,"no entry-exit request available"))
    let active=null;
        if(result.status ==true ){
            active= false
        }else{
            active=true
        }
    

    const update = await entry_exit_model .findByIdAndUpdate(id,{$set:{status:active}},
        { new: true, runValidators: true })
    res.status(200).json({message:"status updated",update,success:true})



})

export default approve_entry_exit