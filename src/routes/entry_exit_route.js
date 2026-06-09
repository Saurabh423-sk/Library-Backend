
import express from "express"
import auth from "../middleware/auth/user_auth.js";
import admin_auth from "../middleware/auth/isadmin.js";
import get_entry_exit_data from "../controllers/entry-exit/get_entry_exit_data.js"
import entry_exit from "../controllers/entry-exit/entry_exit.js"
import approve_entry_exit from "../controllers/entry-exit/entry_exit_approval.js"
import validate from "../middleware/validate/validate.js";
import params_id_validator from "../validators/students/params_id.validator.js";
import entry_exitReq_validation from "../validators/entry_exit/student/entry_exit_req_validation.js";
const entry_exit_router = express.Router()



entry_exit_router.post("/EntryExitLog/api/:id",auth,entry_exitReq_validation,validate,entry_exit)
entry_exit_router.get("/get/EntryExit/data",admin_auth,get_entry_exit_data)
entry_exit_router.patch("/approve/entry_exit/:id",admin_auth,params_id_validator,validate,approve_entry_exit)
export default entry_exit_router
