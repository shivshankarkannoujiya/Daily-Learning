import mongoose from "mongoose";
import dotenv from "dotenv";
import { DB_NAME } from "./constant.js";

dotenv.config();

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`
    );
    console.log(
      `MONGODB CONNECTED SUCCESSFULLY, DB HOST: ${connectionInstance.connection.host}`
    );
    console.log(connectionInstance.connection.host);
  } catch (error) {
    console.error(`MONGODB CONNECTION ERROR: `, error);
    process.exit(1);
  }
};

export default connectDB