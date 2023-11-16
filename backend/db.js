import mongoose from "mongoose";
import { DB_URL } from "./config.js";

export const connectDB = async () => {
  try {
    const db = await mongoose.connect(DB_URL);
    console.log(`Mongodb connected ${db.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
