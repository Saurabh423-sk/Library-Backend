// import user_model from "../../models/user_model.js"
 import book_model from "../../models/books_model.js"
import  borrow_return_model from "../../models/borrow_return_model.js"
import asyncHandler from "../../utils/asyncHandler.js"
import apiError from "../../utils/apiError.js"

const approve_borrow_return = asyncHandler(
    async(req,res,next)=>{
const id = req.params.id

const result = await borrow_return_model.findById(id);
 if(!result)return next(new apiError(404,"data not found"))
    
    let active=null;
        if(result.status == true ){
            active= false
        }else{
            active=true



        }


    const update = await borrow_return_model.findByIdAndUpdate(id,{$set:{status:active}},
        { new: true, runValidators: true })

active? await book_model.findByIdAndUpdate(result.bookid,{$set:{status:"Issued"}},
        { new: true, runValidators: true }): await book_model.findByIdAndUpdate(result.bookid,{$set:{status:"Available"}},
        { new: true, runValidators: true })

    res.status(200).json({message:"status updated",update,success:true})


}
)
export default approve_borrow_return