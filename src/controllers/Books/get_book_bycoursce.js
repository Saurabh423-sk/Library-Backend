import book_model from "../../models/books_model.js"
import asyncHandler from "../../utils/asyncHandler.js"
import apiError from "../../utils/apiError.js"
const get_book_bycourse = asyncHandler(
   async (req, res) => {
  
    const { course } = req.body  

    const result = await book_model.find({ course }) 

    if (result.length === 0)
      return next(new apiError(403,"this course book are not available"))

    res.status(200).json({
      book: result,
      message: "Book fetched successfully",
      success: true
    })

 
}
)  

export default get_book_bycourse