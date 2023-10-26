import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema({
    targetId: {
        type: String,
        required: true,
        trim: true,
    },
    comment: {
        type: String,
        required: true,
        trim: true,
    },
    writeAt: {
        type: Number,
        required: true,
        trim: true,
    },
    isModified: {
        type: Boolean,
        required: true,
    },
    writter: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    }
});

const Comment = mongoose.models.Comment || mongoose.model("Comment", commentSchema);

export default Comment;