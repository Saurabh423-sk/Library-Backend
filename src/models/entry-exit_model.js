import mongoose from "mongoose";

const entry_exitschema = new mongoose.Schema(
  {
    userid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    action: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const entry_exit_model = mongoose.model("entry_exit", entry_exitschema);
export default entry_exit_model;