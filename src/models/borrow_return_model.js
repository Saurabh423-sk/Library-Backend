import mongoose from "mongoose"
const borrow_return_schema = new mongoose.Schema({
       userid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
      bookid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "books",
      required: true,
    },
    action:{
        type:String,
        required:true,
        trim:true,
        lowercase:true
    },
    status:{
        type:Boolean,
        required:true,
        default:false}
    ,
date:{
    type:String,
    required:true
}



})

const borrow_return_model = mongoose.model("borrow-return",borrow_return_schema)

export default borrow_return_model