import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express(); //excuted function

const __filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(__filename);
const dirPath = path.join(_dirname, "public");

// app.use(express.static(dirPath));

app.set("view engine", "ejs");

app.get("", (req, res) => {
  res.sendFile(`${dirPath}/index.html`);
});

app.get("/about", (req, res) => {
  res.sendFile(`${dirPath}/about.html`);
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/profile", (req, res) => {
  const user = {
    name: "Maitri Chauhan",
    email: "mm@test.com",
    city: "veraval",
    skills: ["php", "js", "c++"],
  };
  res.render("profile", { user });
});

app.get("/help", (req, res) => {
  res.sendFile(`${dirPath}/help.html`);
});

app.get("*", (req, res) => {
  res.sendFile(`${dirPath}/404.html`);
});

app.listen(5000);
