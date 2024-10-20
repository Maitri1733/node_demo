import mongoose from "mongoose";
const ProductSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
  catecory: String,
});

export default mongoose.model("mobile_details", ProductSchema);
