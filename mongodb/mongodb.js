import { MongoClient } from "mongodb";
const url = "mongodb://localhost:27017";
const database = "e-comm";
const client = new MongoClient(url);

async function dbConnect() {
  let result = await client.connect();
  let db = result.db(database);
  return db.collection("product");
  // let response = await collection.find({}).toArray();
  // console.log(response);
}
export default dbConnect;
