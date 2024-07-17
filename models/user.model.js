import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    profilePhoto: {
        type: String,
        default: ""
    },
    bio: {
        type: String,
        default: ""
    }
}, { timestamps: true });

const User = mongoose.models?.User || mongoose.model("User", userSchema);

export default User;
