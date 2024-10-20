import dbConnect from "./mongodb.js";

// dbConnect().then((res) => {
//   res
//     .find({ name: "M 11" })
//     .toArray()
//     .then((data) => {
//       console.log(data);
//     });
// });

// console.log(dbConnect());

const main = async () => {
  let data = await dbConnect();
  data = await data.find().toArray();
  console.log(data);
};
main();
