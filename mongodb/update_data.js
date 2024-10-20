import dbConnect from "./mongodb.js";

const updateData = async () => {
  let data = await dbConnect();
  let result = await data.updateMany(
    { name: "max pro 21" },
    { $set: { name: "max pro 29", price: 3450 } }
  );
  console.log(result);
};

updateData();
