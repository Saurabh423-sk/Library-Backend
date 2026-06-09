import book_model from "../../models/books_model.js";
import asyncHandler from "../../utils/asyncHandler.js";
import apiError from "../../utils/apiError.js";
const create_book = asyncHandler(async (req, res,next) => {
  
    const {title,edition,img_url, course,call_no, shelf,condition,status} = req.body;


const isalreadyavailable = await book_model.findOne({call_no});
const con = condition.toLowerCase()

if(isalreadyavailable) return next(new apiError(401,`${title} with this call_no ${call_no}  already availble`))
const result = await book_model.create({
title,edition,img_url, course,call_no, shelf,status,condition:con


})

res.status(201).json({
result,
    message:"book added successfully",
    success:true
})
 





})
export default create_book;
