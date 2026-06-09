import {param} from "express-validator"

const params_id_validator = [
param("id").notEmpty().withMessage("user_id is required for run this operation").isMongoId().withMessage("invalid mongo_id ")

]
export default params_id_validator