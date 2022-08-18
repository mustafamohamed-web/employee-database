import React from "react";
import "../styles/InputCard.css";
import "../styles/InputForm.css";

const InputCard = ({
  name,
  age,
  position,
  salary,
  email,
  service,
  employee,
  setNewSalary,
  updateEmployee,
  deleteEmployee,
  id,
}) => {
  return (
    <div className="cards">
      {employee.map((person, key) => {
        const { name, age, position, salary, email, number } = person;
        return (
          <div className="profile-container">
            <p className="info full-name">{name}</p>
            <p className="info role">{position}</p>
            <p className="info place">{email}</p>

            <div className="posts-info">
              <p>
                <span>{salary}</span> salary
              </p>
              <p>
                <span>{service}</span> Service
              </p>
              <p>
                <span>{age}</span> Age
              </p>
            </div>
            <input
              type="number"
              onChange={(event) => {
                setNewSalary(event.target.value);
              }}
            />

            <button
              className="action"
              onClick={() => updateEmployee(person.id)}
            >
              Update Wage
            </button>
            <button
              className="action message"
              onClick={() => deleteEmployee(person.id)}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default InputCard;
