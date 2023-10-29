import { MongoClient, MongoClientOptions } from "mongodb";
import mongoose from "mongoose"

const options: mongoose.ConnectOptions = {
};

export const getMongoPath = (path:string) => {
    return `${process.env.MONGO_DB}${path}${process.env.MONGO_OPTION}`;
};

export const connectDB = async (path:string="myblog") => {
    try {
        await mongoose.connect(getMongoPath(path), options);
        console.log("MongoDB connect success: index.ts");
    } catch (err) {
        throw new Error("Error in connecting to mongoDB: index.ts");
    }
};