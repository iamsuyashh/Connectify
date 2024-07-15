import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const postSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    user: {
        userId: {
            type: String,
            required: true
        },
        profilePhoto: {
            type: String,
            required: true
        },
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        }
    },
    imageUrl: {
        type: String,
        default: "",
    },
    likes: {
        type: [String]
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }]
}, { timestamps: true });

const Post = models?.Post || model("Post", postSchema);

export default { Post };
