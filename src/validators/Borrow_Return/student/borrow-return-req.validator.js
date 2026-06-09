import {body,param} from "express-validator"

const borrow_return_req_validator = [

    body("title").notEmpty().withMessage("title is required for upload book").isLength({min:2}),
body("call_no").notEmpty().withMessage("call_no is required"),
param("id").notEmpty().withMessage("action is required for run this operation").isIn(["return","borrow"]).withMessage("invalid action ")
]
export default borrow_return_req_validator