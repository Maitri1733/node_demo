import express from "express";

const app = express();

app.get("", (req, res) => {
  //   console.log("data set by browser =>>>>>", req.query.name);
  res.send(
    `<h1>Hello ` + req.query.name + `</h1><a href="/about">Go To About Page</a>`
  );
});

app.get("/about", (req, res) => {
  res.send(`
    <input type="text" placeholder="Enter Your Email Address" value="${req.query.name}"/>
    <button value="Submit" name="btn1">Submit</button><br><br>
    <a href="/">Go To Home Page</a>
    `);
});

app.get("/help", (req, res) => {
  res.send([
    {
      name: "maitri",
      email: "mm@gmail.com",
    },
    {
      name: "Kaushik",
      email: "kk@gmail.com",
    },
  ]);
});

app.listen(5000);
