import {body} from "express-validator"

const get_courseBook_validator = [
    body("course").notEmpty().withMessage("course is required for upload book")
]

export default get_courseBook_validator