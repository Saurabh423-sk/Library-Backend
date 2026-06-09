import { validationResult } from "express-validator";
import apiError from "../../utils/apiError.js";
const validate = (req,res,next)=>{
const err = validationResult(req);
if(!err.isEmpty()) return next(new apiError(400,err.array().map(e=>e.msg).join( " , " )))
else{
    next()
}


}

export default validate