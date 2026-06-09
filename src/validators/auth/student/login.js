import {body} from "express-validator"

const login_validator = [
    body("email").trim().notEmpty().withMessage("email is required for login").bail().isEmail().withMessage("Invalid Email"),
    body("password").trim().notEmpty().withMessage("Password is required for login").bail().isLength({min:5,max:12}).withMessage("password should be between 5 &12 characters")
]

export default login_validator