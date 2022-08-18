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
  const [email, setEmail] = useState("");
  const [number, setNumber] = (useState = 0);
  const [newSalary, setNewSalary] = useState(0);

  const createEmployee = () => {
    Axios.post("http://localhost:3001/create", {
      name: name,
      age: age,
      position: position,
      salary: salary,
      email: email,
      numer: number,
    }).then(() => {
      setEmployee([
        ...employee,
        {
          name: name,
          age: age,
          position: position,
          salary: salary,
          email: email,
          number: number,
        },
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
      setEmployee(
        employee.map((person) => {
          return person.id === id
            ? {
                id: person.id,
                name: person.name,
                country: person.country,
                age: person.age,
                position: person.position,
                email: person.email,
                number: person.number,
                salary: newSalary,
              }
            : person;
        })
      );
    });
  };
  const deleteEmployee = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setEmployee(
        employee.filter((val) => {
          return val.id !== id;
        })
      );
    });
  };

  return (
    <div className="container">
      <InputForm
        setAge={setAge}
        setName={setName}
        setPosition={setPosition}
        setSalary={setSalary}
        setEmail={setEmail}
        setNumber={setNumber}
        createEmployee={createEmployee}
        displayEmployee={displayEmployee}
        name={name}
        age={age}
        salary={salary}
        position={position}
        email={email}
        number={number}
      />

      <InputCard
        employee={employee}
        name={name}
        age={age}
        position={position}
        salar={salary}
        email={email}
        number={number}
        setNewSalary={setNewSalary}
        updateEmployee={updateEmployee}
        deleteEmployee={deleteEmployee}
      />
    </div>
  );
};

export default Input;
