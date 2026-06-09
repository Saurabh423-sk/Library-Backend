import user_model from "../../models/user_model.js"
import asyncHandler from "../../utils/asyncHandler.js";
import apiError from "../../utils/apiError.js";
const get_student=asyncHandler(async(req,res,next)=>{

    const result = await user_model.find({role:"student"});
if(result.length == 0) return res.status(200).json({message:"no any students avalible" , success:false})

let inactive=0;
let active =0;
  for(let i=0; i < result.length ;i++){
    if(result[i].isactive == false){
        inactive++
    }
    else{
        active++
    }
  }


    res.status(200).json({student:result,total:result.length,active,inactive,message:"student data fetched successfully",success:true})
    


} )
export default get_student