import user_model from "../../models/user_model.js"
 import book_model from "../../models/books_model.js"
import  borrow_return_model from "../../models/borrow_return_model.js"
import asyncHandler from "../../utils/asyncHandler.js"
import apiError from "../../utils/apiError.js"
 const get_borrow_return =asyncHandler(
   async (req,res,next)=>{

const data = await borrow_return_model.find()
.populate("userid")
.populate("bookid")

if(!data) return next(new apiError(404,"no request availaible"))

let pending=0
let approved=0

for(let i = 0 ;i<data.length;i++){
if(data[i]?.status == true){
  approved +=1
}else{
  pending +=1
}

}



const response = data.map((e,i)=>{
 return {
    id:e._id,
    title:e.bookid?.title,
    edition:e.bookid?.edition,
    call_no:e.bookid?.call_no,
    fullname:e.userid?.fullname,
    roll:e.userid?.roll_no,
    course:e.userid?.department,
      sem:e.userid?.sem,
      action:e?.action,
date:e?.date,
status:e?.status

  }  
})





res.status(200).json({
    response,
    pending,approved
})











 }
 )
export default get_borrow_return