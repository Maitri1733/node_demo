import express from "express";
import * as abc from "./cofig_mongoose.js";
import product from "./mobile_details.js";

const app = express();

app.use(express.json());

app.post("/create", async (req, res) => {
  let data = await new product(req.body);
  let result = await data.save();
  console.log(result);
  res.send(result);
});

app.get("/list", async (req, res) => {
  let data = await product.find();
  // console.log(data);
  res.send(data);
});

app.delete("/delete/:_id", async (req, res) => {
  let data = await product.deleteOne(req.params);
  console.log(data);
  res.send(data);
});

app.put("/update/:_id", async (req, res) => {
  let data = await product.updateOne(req.params, { $set: req.body });
  console.log(data);
  res.send(data);
});

app.listen(5000);
