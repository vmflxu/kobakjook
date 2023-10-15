import { MongoClient, MongoClientOptions } from "mongodb";
import mongoose from "mongoose"

const URI = process.env.MONGO_DB as string;
const options: mongoose.ConnectOptions = {
};

export const connectDB = async () => {
    try {
        await mongoose.connect(URI, options);
        console.log("MongoDB connection successful");
    } catch (err) {
        throw new Error("Error in connecting to mongoDB");
    }
}