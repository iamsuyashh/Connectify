import mongoose from "mongoose";

let isConnected = false;

const connectDB = async () => {
    if (isConnected) {
        console.log("Mongodb already connected");
        return isConnected;
    }
    try {
        console.log("Attempting to connect to MongoDB...");
        console.log("MONGO_URI:", process.env.MONGO_URI);

        const res = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        isConnected = res.connection;
        console.log("Mongodb connected.");
        return isConnected;
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

export default connectDB;
