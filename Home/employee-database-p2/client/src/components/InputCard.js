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
          <div className="employee-list">
            <h2>Employee Data</h2>
            <div className="info-card">
              <div className="left">
                <h3 className="name">Name: {name}</h3>
                <h3 className="age"> Age: {age}</h3>
                <h3 className="position"> Position: {position}</h3>
              </div>
              <div className="right">
                <h3 className="salary"> Salary: {salary}</h3>
                <h3 className="email">Email : {email}</h3>
                <h3 className="number">Length of service : {service}</h3>
              </div>
            </div>
            <div className="input-btn">
              <input
                className="wage-input"
                type="number"
                placeholder="2000"
                onChange={(e) => {
                  setNewSalary(e.target.value);
                }}
              />
              <div className="btns">
                <input
                  type="submit"
                  className="update-btn"
                  onClick={() => updateEmployee(person.id)}
                  value="Update wage"
                />

                <input
                  className="delete-btn"
                  type="submit"
                  onClick={() => deleteEmployee(person.id)}
                  value="Delete employee"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default InputCard;
