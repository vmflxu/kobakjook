import mongoose, { Schema } from "mongoose";

const postSchema = new Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        trim: true,
        minLength: [2, "Must be larger than 2"],
        maxLength: [50, "Must be lesser than 50"],
    },
    path: String,
    content: {
        type: String,
        required: [true, "Title is required"],
        trim: true,
        minLength: [2, "Must be larger than 2"],
    },
});

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Post;