import book_model from "../../models/books_model.js";
import asyncHandler from "../../utils/asyncHandler.js";
import apiError from "../../utils/apiError.js";
const delete_book=asyncHandler(async(req,res,next)=>{

    const id = req.params.id;

const isBookavailable =await  book_model.findById(id);
if(!isBookavailable) return next(new apiError(403,"this book was already deleted"))

const result = await book_model.findByIdAndDelete(id);

res.status(200).json({
    message:`${isBookavailable.title} is deleted successfully`,
    success:true
})



})

export default delete_book