import React from "react";
import "../styles/InputForm.css";

const InputForm = ({
  setName,
  setAge,
  setPosition,
  setSalary,
  setEmail,
  setService,
  createEmployee,
  displayEmployee,
}) => {
  return (
    <div className="container">
      <div className="title">Emplyee Registration</div>
      <div className="content">
        <form action="#">
          <div className="user-details">
            <div className="input-box">
              <span className="details">Full Name</span>
              <input
                type="text"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Age</span>
              <input
                type="text"
                onChange={(e) => {
                  setAge(e.target.value);
                }}
                placeholder="Enter your Age"
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Email</span>
              <input
                type="text"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Salary</span>
              <input
                type="number"
                onChange={(e) => {
                  setSalary(e.target.value);
                }}
                placeholder="Enter your number"
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Position</span>
              <input
                type="text"
                onChange={(e) => {
                  setPosition(e.target.value);
                }}
                placeholder="Enter your position"
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Length of employement</span>
              <input
                type="number"
                placeholder="Length of employement"
                required
                onChange={(e) => {
                  setService(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="button">
            <input
              type="submit"
              onClick={createEmployee}
              value="Add employee"
            />

            <input
              type="submit"
              onClick={displayEmployee}
              value="Show all employees"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default InputForm;
