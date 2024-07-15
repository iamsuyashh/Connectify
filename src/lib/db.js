import mongoose from "mongoose";

let isConnected = false; // track the connection

const connectDB = async () => {
    if (isConnected) {
        console.log("Mongo db is already connected");
        return isConnected;
    }
    try {
        const res = await mongoose.connect(process.env.MONGO_URI)
        isConnected = res.connection;
        console.log("Mongo db is connected")
        return isConnected
    } catch (error) {
        console.log(error);
    }
}

export default connectDB