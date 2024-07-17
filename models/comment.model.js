import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
    textMessage: { type: String, required: true },
    user: {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        userId: { type: String, required: true },
        profilePhoto: { type: String, required: true },
    },
}, { timestamps: true });

const Comment = mongoose.models.Comment || mongoose.model('Comment', commentSchema);

export { Comment };
