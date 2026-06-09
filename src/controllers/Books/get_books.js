import book_model from "../../models/books_model.js";
import asyncHandler from "../../utils/asyncHandler.js";

const get_book = asyncHandler(
  async (req, res) => {
  
    const result = await book_model.find();
    if (result.length == 0)
      return res.status(200).json({ message: "no any books available" });
let total_book =0;
let total_available_book = 0;
let total_issued_book = 0;
for(let i=0; i<result.length; i++){
    if(result[i].status === "Available"){
      total_book +=1;
      total_available_book +=1
    }
    else if(result[i].status === "Issued"){

      total_issued_book +=1
       total_book +=1;
    }
    else{
        total_book +=1;
    }
}



    res.status(201).json({total_available_book,total_book,total_issued_book,
      books: result,
      message: "book fetched successfully",
    });
  
}
)
export default get_book;
