import dbConnect from "./mongodb.js";

const insert = async () => {
  const db = await dbConnect();
  const result = await db.insertMany([
    {
      name: "A 20 pro",
      brand: "Oppo",
      price: "2399",
      catecory: "mobile",
    },
    {
      name: "A 22 pro",
      brand: "Apple",
      price: "237",
      catecory: "mobile",
    },
    {
      name: "A 21 pro",
      brand: "MI",
      price: "233",
      catecory: "mobile",
    },
  ]);
  if (result.acknowledged) {
    console.log("data inserted");
  }
};

insert();
