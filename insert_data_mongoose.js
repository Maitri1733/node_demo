import mongoose from "mongoose";

const main = async () => {
  const conn = await mongoose.connect(
    "mongodb://localhost:27017/mongoose_demo"
  );
  const ProductSchema = new mongoose.Schema({
    name: String,
    brand: String,
    price: Number,
    catecory: String,
  });
  const ProductModel = conn.model("mobile_details", ProductSchema);
  let data = new ProductModel({
    name: "m10",
    price: 5999,
    brand: "MI",
    catecory: "mobile",
  });
  let result = await data.save();
  console.log(result);
};
main();
