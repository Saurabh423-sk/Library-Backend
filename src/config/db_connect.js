import mongoose from "mongoose";

const db_connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected ✅");
  } catch (error) {
    console.log("DB connection failed ❌");
    throw error;   // 🔥 IMPORTANT
  }
};

export default db_connect;