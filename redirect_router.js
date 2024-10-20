import express from "express";
import reqFilter from "./middleware.js";
const app = express();
const route = express.Router();

// app.use(reqFilter);
route.use(reqFilter);
app.get("/", (req, res) => {
  res.send("Welcome To Home page");
});

app.get("/users", (req, res) => {
  res.send("Welcome To Users page");
});

route.get("/about", (req, res) => {
  res.send("Welcome To About page");
});

route.get("/contact", (req, res) => {
  res.send("Welcome To Contact page");
});

app.use("/", route);

app.listen(5000);
