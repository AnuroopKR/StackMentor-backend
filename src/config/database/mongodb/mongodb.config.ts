import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();
 const mongo_url=process.env.MONGODB_URL 
const connectDb=async()=>{
    try {
        await mongoose.connect(mongo_url as string) 
        console.log("mongodb connected...")

    } catch (error) {
         console.error("MongoDB Connection Error : ",error);
        throw new Error("Databse connection failed");
    }
}

export default connectDb