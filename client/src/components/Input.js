import React, { useState } from "react";
import "../styles/Input.css";
import Axios from "axios";
import InputCard from "./InputCard";
import InputForm from "./InputForm";

const Input = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState(0);
  const [employee, setEmployee] = useState([]);
  const [newSalary, setNewSalary] = useState(0);

  const createEmployee = () => {
    Axios.post("http://localhost:3001/create", {
      name: name,
      age: age,
      position: position,
      salary: salary,
    }).then(() => {
      setEmployee([
        ...employee,
        { name: name, age: age, position: position, salary: salary },
      ]);
    });
  };

  const displayEmployee = () => {
    Axios.get("http://localhost:3001/employees").then((response) => {
      setEmployee(response.data);
    });
  };

  const updateEmployee = (id) => {
    Axios.put("http://localhost:3001/update", {
      salary: newSalary,
      id: id,
    }).then((response) => {
      alert("salary updated");
    });
  };

  return (
    <div className="container">
      <InputForm
        setAge={setAge}
        setName={setName}
        setPosition={setPosition}
        setSalary={setSalary}
        createEmployee={createEmployee}
        displayEmployee={displayEmployee}
      />

      <InputCard
        employee={employee}
        name={name}
        age={age}
        position={position}
        salar={salary}
        setNewSalary={setNewSalary}
        updateEmployee={updateEmployee}
      />
    </div>
  );
};

export default Input;
