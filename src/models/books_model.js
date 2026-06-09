import mongoose from "mongoose"

const Books_schema = new mongoose.Schema({

title:{
    type:String,
    required:true,
    index:true
    }
,
edition:{
    type:String,
    required:true,
    
},
img_url:{
    type:String,
    required:true,
    
},

course:{
    type:String,
    required:true,
    uppercase:true,
    trim:true
    
}
,
call_no:{
    type:String,
    required:true,
    unique:true
},
shelf:{
    type:String,
    required:true,
    
},
status: {
  type: String,
  enum: ["Available", "Issued"],
  required: true,
  default:"Available"
},

condition: {
  type: String,
  enum: ["good", "bad", "poor"],
  required: true
}



})


const book_model = mongoose.model("books", Books_schema)

export default book_model 


