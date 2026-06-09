import mongoose from "mongoose"

const blacklist_token_schema = new mongoose.Schema({
    token:{
        type:String,
        required:true
    }
})


const blacklist_model = mongoose.model("blacklist_token",blacklist_token_schema)

export default blacklist_model