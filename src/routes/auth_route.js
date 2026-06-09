
import express from "express"
import signup from "../controllers/auth/signup.js"
import login from "../controllers/auth/login.js"
import admin from "../controllers/auth/admin_login.js";
import check from "../controllers/auth/check_auth.js";
import auth from "../middleware/auth/user_auth.js";
import check_admin from "../controllers/auth/check_admin.js";
import admin_auth from "../middleware/auth/isadmin.js";
import logout from "../controllers/auth/logout.js";
import validate from "../middleware/validate/validate.js";
import signup_validator from "../validators/auth/student/signup.validator.js";
import login_validator from "../validators/auth/student/login.js";
import verifyEmail from "../controllers/Email/verifyemail.js";
const auth_routes = express.Router();


auth_routes.post("/signup",signup_validator,validate,signup)

auth_routes.post("/login",login_validator,validate,login)
auth_routes.post("/logout",logout)

auth_routes.post("/adminlogin",admin)

auth_routes.get("/check",auth,check)
auth_routes.get("/check_admin",admin_auth,check_admin)
auth_routes.get("/verifyemail/:user",verifyEmail)

export default auth_routes

