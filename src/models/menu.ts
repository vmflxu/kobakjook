import mongoose, { Schema } from "mongoose";

const menuSchema = new Schema({
    title: String,
    path: String,
});

const Menu = mongoose.models.Menu || mongoose.model("Menu", menuSchema);
// const Menu = mongoose.model("Menu", menuSchema);

export default Menu;