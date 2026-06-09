
import {body} from "express-validator"

const signup_validator = [

body("fullname").trim().notEmpty().withMessage("fullname is required for signup").bail().isLength({min:4}).withMessage("you must have to write your fullname"),

body("phone_no").trim().notEmpty().withMessage("phone_no is required for signup").bail().isMobilePhone("en-IN").withMessage("Enter a valid indian number"),

body("email").trim().notEmpty().withMessage("email is required for signup").bail().isEmail().withMessage("Invalid email"),

body("roll_no").trim().notEmpty().withMessage("roll_no is required for signup").bail().isLength({min:1,max:4}),

body("sem").trim().notEmpty().withMessage("sem is required for signup").bail().isInt({min:1,max:8}).withMessage("choose year/sem between 1-8 "),

body("department").trim().notEmpty().withMessage("department is required for signup").isIn(["BCA","BBA","BBM","BSC_IT","bca","bbm","bba","bsc_it"]),

body("password").trim().notEmpty().withMessage("password is required for signup").bail().isLength({min:5 , max:12}).withMessage("password should be between 5 to 12 character"),






]

export default signup_validator