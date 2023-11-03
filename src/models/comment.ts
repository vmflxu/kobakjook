import { ObjectId } from "mongodb";
import mongoose, { Schema } from "mongoose";

export type CommentSchemaType = {
    targetId: string,
    comment: string,
    writeAt: number,
    writter: string,
    modified: boolean,
    password: string,
}

export type ResCommentSchemaType = {
    _id: string,
} & CommentSchemaType;

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
    modified: {
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