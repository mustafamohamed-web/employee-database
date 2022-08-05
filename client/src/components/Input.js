import React, { useState } from "react";
import "../styles/Input.css";
import Axios from "axios";

const Input = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState(0);

  // const handleClick = () => {
  //   console.log(name + age + salary + postion);
  // };

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

  return (
    <div>
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
      </div>
    </div>
  );
};

export default Input;
