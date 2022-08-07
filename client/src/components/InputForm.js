import React from "react";

const InputForm = ({
  setName,
  setAge,
  setPosition,
  setSalary,
  createEmployee,
  displayEmployee,
}) => {
  return (
    <div className="inputs input-first">
      <h1>Mustafa's Payroll</h1>
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
      <div className="buttons">
        <button onClick={createEmployee} className="btn one ">
          Add Employee
        </button>
        <button onClick={displayEmployee} className="btn two">
          Show Employees
        </button>
      </div>
    </div>
  );
};

export default InputForm;
