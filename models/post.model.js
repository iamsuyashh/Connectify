import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    description: { type: String, required: true },
    user: {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        userId: { type: String, required: true },
        profilePhoto: { type: String, required: true }, 
    },
    imageUrl: { type: String },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
}, { timestamps: true });

const Post = mongoose.models.Post || mongoose.model('Post', postSchema);

export { Post };
