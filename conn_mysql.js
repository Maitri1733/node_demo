import mysql from "mysql";

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test_ven",
});

conn.connect((error) => {
  // if (error) {
  //   console.log("error");
  // } else {
  //   console.log("database connected...");
  // }
});

conn.query("select * from customer", (err, result) => {
  console.log(result);
});
