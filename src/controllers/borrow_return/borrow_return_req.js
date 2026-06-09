import user_model from "../../models/user_model.js"
 import book_model from "../../models/books_model.js"
import  borrow_return_model from "../../models/borrow_return_model.js"
import asyncHandler from "../../utils/asyncHandler.js"
import apiError from "../../utils/apiError.js"
 const borrow_return_req = asyncHandler(
    async (req,res,next)=>{
const {title,call_no}=req.body
const userid = req.user.userid
const id = req.params.id

const user = await user_model.findById(userid)
const book = await book_model.findOne({title,call_no})
if(!user)return next(new apiError(404,"user not found"))
    if(!book)return next(new apiError(404,"books not found"))

const today = new Date()
const today_date = today.toLocaleDateString("en-IN")

if(book.status == "Issued" && id == "borrow")return res.status(400).json({message:"This book is already borrowed by someone"})

const result = await borrow_return_model.create({
userid,
bookid:book._id,
action:id,

date:today_date

})

res.status(201).json({
    message:`${id} request for ${title} is done`,success:true
})





 }
 )
export default borrow_return_req