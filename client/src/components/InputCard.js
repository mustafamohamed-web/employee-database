import React from "react";
import "../styles/InputCard.css";

const InputCard = ({
  name,
  age,
  position,
  salary,
  email,
  number,
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
          <div className="employee-list">
            <div>
              <h2 className="heading">Employee Data</h2>
              <h3 className="name">Name: {name}</h3>
              <h3 className="age"> Age: {age}</h3>
              <h3 className="position"> Position: {position}</h3>
              <h3 className="salary"> Salary: {salary}</h3>
              <h3 className="email"> email {email}</h3>
              <h3 className="number"> number: {number}</h3>
            </div>

            <div className="update-section">
              <input
                className="wage-input"
                type="number"
                placeholder="update wage...."
                onChange={(e) => {
                  setNewSalary(e.target.value);
                }}
              />
              <button
                className="btn three"
                onClick={() => updateEmployee(person.id)}
              >
                Update Wage
              </button>
              <button
                className="btn four"
                onClick={() => deleteEmployee(person.id)}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default InputCard;
