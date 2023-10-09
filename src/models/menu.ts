import mongoose, { Schema } from "mongoose";

const menuSchema = new Schema({
    title: {
        type: String,
        required: [true, "title is required"],
        trim: true,
        minLength: [2, "at least 2"],
        maxLength: [20, "maximum 20"],
    },
    path: {
        type: String,
        required: [true, "required"],
        trim: true,
        minLength: [2, "at least 2"],
        maxLength: [20, "maximum 20"],
    }
});

const Menu = mongoose.models.Menu || mongoose.model("Menu",menuSchema);

export default Menu;