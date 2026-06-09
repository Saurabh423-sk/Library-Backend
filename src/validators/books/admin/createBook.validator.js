// title|| !edition || !img_url || ! course || !call_no || ! shelf || !status || !condition)

import {body} from "express-validator"

const createBook_validator = [
body("title").notEmpty().withMessage("title is required for upload book").isLength({min:2}),


body("edition").notEmpty().withMessage("edition is required for upload book").isLength({min:1}),


body("img_url").notEmpty().withMessage("img_url is required for upload book"),


body("course").notEmpty().withMessage("course is required for upload book").toUpperCase().withMessage("only allowed "+ " BCA,BBA,BBM,BSC_IT"),


body("call_no").notEmpty().withMessage("call_no is required for upload book"),


body("shelf").notEmpty().withMessage("shelf is required for upload book"),


body("condition").notEmpty().withMessage("condition is required for upload book").toLowerCase().isIn(["good","bad","poor"]).withMessage("only allowed : good ,bad , poor"),



]

export default createBook_validator
