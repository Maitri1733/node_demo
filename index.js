import express from "express";
import conn from "./config_mysql.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  conn.query("select * from customer", (err, result) => {
    if (err) {
      res.send("error....");
    } else {
      res.send(result);
    }
  });
});

app.post("/", (req, res) => {
  const data = req.body;
  conn.query("INSERT INTO customer SET?", data, (err, result, fields) => {
    if (err) throw error;
    res.send(result);
  });
});

app.put("/:id", (req, res) => {
  const data = [req.body.name, req.body.email, req.params.id];
  conn.query(
    "UPDATE customer SET name=?,email=? WHERE id=?",
    data,
    (err, result, fields) => {
      if (err) throw error;
      res.send(result);
    }
  );
});

app.delete("/:id", (req, res) => {
  conn.query(
    "DELETE FROM customer WHERE id=" + req.params.id,
    (err, result, fields) => {
      if (err) throw error;
      res.send(result);
    }
  );
});

app.listen(5000);
