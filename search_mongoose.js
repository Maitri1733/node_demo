import express from "express";
import * as abc from "./cofig_mongoose.js";
import product from "./mobile_details.js";

const app = express();

app.use(express.json());

app.get("/search/:key", async (req, res) => {
  console.log(req.params.key);
  let data = await product.find({
    $or: [
      { name: { $regex: req.params.key } },
      { brand: { $regex: req.params.key } },
      { catecory: { $regex: req.params.key } },
      { price: parseInt(req.params.key) },
    ],
  });
  res.send(data);
});

app.listen(5000);
