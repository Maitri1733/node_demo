import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
  catecory: String,
});

const saveInDB = async () => {
  const conn = await mongoose.connect(
    "mongodb://localhost:27017/mongoose_demo"
  );

  const ProductModel = mongoose.model("mobile_details", ProductSchema);
  //   let data = new ProductModel({
  //     name: "m10",
  //     price: 5999,
  //     brand: "MI",
  //     catecory: "mobile",
  //   });
  //   let result = data.save();
  //   console.log(result);
};
const updateInDB = async () => {
  await saveInDB();
  const ProductModel = mongoose.model("mobile_details", ProductSchema);
  let data = await ProductModel.updateOne(
    { name: "m9" },
    { $set: { price: 400, name: "m11" } }
  );
  console.log(data);
};

const deleteInDB = async () => {
  // await updateInDB();
  await saveInDB();
  const ProductModel = mongoose.model("mobile_details", ProductSchema);
  let data = await ProductModel.deleteOne({ name: "m11" });
  console.log(data);
};

const findInDB = async () => {
  // await deleteInDB();
  await saveInDB();
  const ProductModel = mongoose.model("mobile_details", ProductSchema);
  let data = await ProductModel.find({ price: 8000 });
  console.log(data);
};

findInDB();
