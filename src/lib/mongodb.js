// src/lib/mongodb.js
import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("Connected to MongoDB (care_db)");
    }
  } catch (error) {
    console.error("Error connecting to MongoDB: ", error);
  }
};

export default connectMongoDB;
