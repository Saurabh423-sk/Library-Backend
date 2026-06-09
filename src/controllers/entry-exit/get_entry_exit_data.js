import entry_exit_model from "../../models/entry-exit_model.js";
import asyncHandler from "../../utils/asyncHandler.js";


const get_entry_exit_data =asyncHandler(
   async (req, res,next) => {
  const result = await entry_exit_model.find().populate("userid");
  if(!result) return next(new apiError(404,"no request are present for entry-exit"))
const today = new Date()
const startday = new Date(today)
startday.setHours(0,0,0,0)
const end_day = new Date(today)
end_day.setHours(23,59,59,999)

const today_data = await entry_exit_model.find({
  createdAt:{
    $gte:startday,
    $lte:end_day
  }
})



let entry=0;
let exit=0

const today_entry_exit_data = today_data.map((e)=>{
if(e.action == "entry"){
  entry +=1
}else{
  exit+=1
}



})


const responsedata = result.map((e)=>({
id:e._id,
fullname:e.userid.fullname,
course:e.userid.department,
roll_no:e.userid.roll_no,
sem:e.userid.sem,
action:e.action,
status:e.status,
date:e.createdAt.toLocaleDateString("en-IN"),
time:e.createdAt.toLocaleTimeString("en-IN"),




}))



  res.status(200).json({
  responsedata,
  total_entry:entry,
total_exit:exit

  });
}
)

export default get_entry_exit_data;
