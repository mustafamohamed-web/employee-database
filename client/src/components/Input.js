import React, { useState } from "react";
import "../styles/Input.css";
import Axios from "axios";

const Input = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState(0);

  const [employee, setEmployee] = useState([]);

  const createEmployee = () => {
    Axios.post("http://localhost:3001/create", {
      name: name,
      age: age,
      position: position,
      salary: salary,
    }).then(() => {
      console.log("success");
    });
  };

  const displayEmployee = () => {
    Axios.get("http://localhost:3001/employees").then((response) => {
      setEmployee(response.data);
    });
  };

  return (
    <div className="container">
      <h1>Mustafa's Payroll</h1>
      <div className="inputs">
        <label>Name</label>
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label>Age</label>
        <input
          type="Number"
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <label>Position</label>
        <input
          type="Text"
          onChange={(e) => {
            setPosition(e.target.value);
          }}
        />
        <label>Salary</label>
        <input
          type="number"
          onChange={(e) => {
            setSalary(e.target.value);
          }}
        />
        <button onClick={createEmployee} className="btn">
          Add Employee
        </button>
        <button onClick={displayEmployee} className="btn">
          Show Employees
        </button>
        <div className="cards">
          {employee.map((person, key) => {
            const { name, age, position, salary } = person;
            return (
              <div className="employee-list">
                <h3 className="name">{name}</h3>
                <h3 className="age">{age}</h3>
                <h3 className="position">{position}</h3>
                <h3 className="salary">{salary}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Input;
