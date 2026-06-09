import mongoose from "mongoose"
import bcrypt from "bcrypt"
import sendMail from "../utils/EMAIL/sendemail.js"
import { signup_msg } from "../utils/EMAIL/msg.js"

const user_schema = new mongoose.Schema({
  fullname: { type: String, required: true, trim: true },
  phone_no: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ["student", "admin"], default: "student" },
  roll_no: { type: String, required: true },
  sem: { type: String, required: true },
  department: { type: String, required: true },
  password: { type: String, required: true, select: false },
  isverify: { type: Boolean, required: true, default: false },
  isactive: { type: Boolean, default: false }
})

user_schema.pre("save", async function () {
  if (!this.isModified("password")) return
  this.password = await bcrypt.hash(this.password, 10);
})

user_schema.post("save", async function (doc) {
  try {
    const link = `http://localhost:4600/auth/verifyemail/${doc._id}`
    await sendMail(doc.email, "Library Access Pending Approval", signup_msg(link))
  } catch (err) {
    console.log("Email error (ignored):", err.message)
  }
})

const user_model = mongoose.model("user", user_schema)
export default user_model