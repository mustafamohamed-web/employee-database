import React, { useState } from "react";
import "../styles/Input.css";

const Input = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [postion, setPosition] = useState("");
  const [salary, setSalary] = useState(0);

  const handleClick = () => {
    console.log(name + age + salary + postion);
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
        <label>Salary (yearly):</label>
        <input
          type="Number"
          onChange={(e) => {
            setSalary(e.target.value);
          }}
        />
        <label>Postion</label>
        <input
          type="text"
          onChange={(e) => {
            setPosition(e.target.value);
          }}
        />
        <button onClick={handleClick} className="btn">
          Add Employee
        </button>
      </div>
    </div>
  );
};

export default Input;
