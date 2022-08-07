import React from "react";

const InputCard = ({
  name,
  age,
  position,
  salary,
  employee,
  setNewSalary,
  updateEmployee,
  id,
}) => {
  return (
    <div className="cards">
      {employee.map((person, key) => {
        const { name, age, position, salary } = person;
        return (
          <div className="employee-list">
            <div>
              <h2>Employee Data</h2>
              <h3 className="name">Name: {name}</h3>
              <h3 className="age"> Age: {age}</h3>
              <h3 className="position"> Position: {position}</h3>
              <h3 className="salary"> Salary: {salary}</h3>
              <input
                className="wage-input"
                type="number"
                placeholder="2000"
                onChange={(e) => {
                  setNewSalary(e.target.value);
                }}
              />
              <button
                className="update-btn"
                onClick={() => updateEmployee(person.id)}
              >
                Update Wage
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default InputCard;
