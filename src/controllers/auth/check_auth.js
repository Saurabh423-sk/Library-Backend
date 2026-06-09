import user_model from "../../models/user_model.js";
import entry_exit_model from "../../models/entry-exit_model.js";
import borrow_return_model from "../../models/borrow_return_model.js";
const check = async(req, res) => {
    const data = await user_model.findById(req.user.userid)

const library_visit = await entry_exit_model.find({userid:req.user.userid,action:"entry",status:true})

const book_borrowed = await borrow_return_model.find({userid:req.user.userid,action:"borrow",status:true})




    res.status(200).json({
        message: "authenticated",
        data,
     library_visit,   
     book_borrowed,
        success: true
    });
};

export default check;
