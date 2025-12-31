import mongoose from "mongoose";
const mongos_uri = process.env.MONGODB_URI;

export default async function connectDB() {
  try {
    if (!mongos_uri) {
      throw new Error("MONGODB_URI is not defined in environment variable");
    }
    await mongoose.connect(mongos_uri);
    console.log("connecting to db");
  } catch (error) {
    console.log(error);
  }
}
