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

    ProfilePhoto: {
        type: String,
        default: ""
    },
    bio: {
        type: String,
        default: ""
    },
}, { timestamps: true })
export const User = mongoose.models?.User || mongoose.model("User", userSchema)