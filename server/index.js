const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "mustafa246",
  database: "employee-database",
});

app.post("/create", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const position = req.body.position;
  const salary = req.body.salary;

  db.query(
    "INSERT INTO employee-database (name,age,position,salary) VALUES (?,?,?,?),",
    [name, age, position, salary],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.listen(3001, () => {
  console.log("server is running");
});
