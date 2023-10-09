import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        if(mongoose.connection.readyState === 0) {
            await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB as string);
            console.log('db connected');
        }
    } catch(err) {
        console.log(err);
    }
}