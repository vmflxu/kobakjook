import { MongoClient, MongoClientOptions } from "mongodb";
import mongoose from "mongoose"

const URI = process.env.MONGO_DB as string;
const options: mongoose.ConnectOptions = {
};

// if (!URI) throw new Error("Check Env");

// let client = new MongoClient(URI, options);
// let connectDB;

// // if(process.env.NODE_ENV !== 'production') {
// //     if (!global._mongoClientPromise) {

// //     }
// // }
// connectDB = client.connect();

// export default connectDB;

export const connectDB = async () => {
    try {
        await mongoose.connect(URI, options);
        console.log("MongoDB connect success");
    } catch (err) {
        throw new Error("Error in connecting to mongoDB");
    }
}