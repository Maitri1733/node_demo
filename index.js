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

app.listen(5000);
