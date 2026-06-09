import { param } from "express-validator";

const entry_exitReq_validation=[
    param('id').notEmpty().withMessage("action is required").isIn(["entry","exit"]).withMessage("allowed action :- entry , exit")
]

export default entry_exitReq_validation