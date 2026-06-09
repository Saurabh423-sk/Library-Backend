
import express from "express"
import auth from "../middleware/auth/user_auth.js";
import admin_auth from "../middleware/auth/isadmin.js";
import borrow_return_req from "../controllers/borrow_return/borrow_return_req.js"
import get_borrow_return from "../controllers/borrow_return/get_borrow_return.js"
import  approve_borrow_return from "../controllers/borrow_return/borrow_return_status.js"
import validate from "../middleware/validate/validate.js";
import borrow_return_req_validator from "../validators/Borrow_Return/student/borrow-return-req.validator.js";
import params_id_validator from "../validators/students/params_id.validator.js";
const borrow_return_router = express.Router()




borrow_return_router.post("/borrow_return/req/:id",auth,borrow_return_req_validator,validate,borrow_return_req)
borrow_return_router.get("/borrow_return",admin_auth,get_borrow_return)
borrow_return_router.patch("/borrow_return/approval/:id",admin_auth,params_id_validator,validate,approve_borrow_return)
export default borrow_return_router
