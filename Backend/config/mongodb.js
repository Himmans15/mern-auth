import mongoose from "mongoose";

// Function for assuring that mongodb connnec successfully
const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("Database Connected");
  });
  await mongoose.connect(`${process.env.MONGODB_URI}/mern-auth`);
};

export default connectDB;
