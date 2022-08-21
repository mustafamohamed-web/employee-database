import React, { useState } from "react";
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
  const [service, setService] = useState(0);
  const [newSalary, setNewSalary] = useState(0);

  const createEmployee = () => {
    Axios.post("http://localhost:3001/create", {
      name: name,
      age: age,
      position: position,
      salary: salary,
      email: email,
      service: service,
    }).then(() => {
      setEmployee([
        ...employee,
        {
          name: name,
          age: age,
          position: position,
          salary: salary,
          email: email,
          service: service,
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
          return person.id == id
            ? {
                id: person.id,
                name: person.name,
                country: person.country,
                age: person.age,
                position: person.position,
                email: person.email,
                service: person.service,
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
        employee.filter((person) => {
          return person.id != id;
        })
      );
    });
  };

  return (
    <div>
      <div className="container-2">
        <InputForm
          setAge={setAge}
          setName={setName}
          setPosition={setPosition}
          setSalary={setSalary}
          setEmail={setEmail}
          setService={setService}
          createEmployee={createEmployee}
          displayEmployee={displayEmployee}
        />
      </div>

      <InputCard
        employee={employee}
        name={name}
        age={age}
        position={position}
        salar={salary}
        email={email}
        service={service}
        setNewSalary={setNewSalary}
        updateEmployee={updateEmployee}
        deleteEmployee={deleteEmployee}
      />
    </div>
  );
};

export default Input;
