const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

app.use(cors());
app.use(express.json());

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
    "INSERT INTO employees (name, age, position, salary) VALUES (?,?,?,?)",
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

app.get("/employees", (req, res) => {
  db.query("SELECT * FROM  employees", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/update", (req, res) => {
  const id = req.body.id;
  const salary = req.body.salary;

  db.query(
    "UPDATE employees SET salary = ? WHERE ID =?",
    [salary, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM employees WHERE 'id' = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Values Inserted");
    }
  });
});

app.listen(3001, () => {
  console.log("server is running");
});
