import express from "express"
import get_student from "../controllers/students/get_student.js"
import admin_auth from "../middleware/auth/isadmin.js"
import approve_student from "../controllers/students/approve_student.js"
import params_id_validator from "../validators/students/params_id.validator.js"
import validate from "../middleware/validate/validate.js"
const student_router = express.Router()

student_router.get("/students/data",admin_auth,get_student)
student_router.patch("/approve/students/:id",admin_auth,params_id_validator,validate,approve_student)



export default student_router