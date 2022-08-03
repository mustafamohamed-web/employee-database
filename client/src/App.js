import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Mustafa's Payroll</h1>
      <div className="inputs">
        <label>Name</label>
        <input type="text" />
        <label>Age</label>
        <input type="Number" />
        <label>Salary (yearly):</label>
        <input type="Number" />
        <label>Postion</label>
        <input type="text" />
        <button className="btn">Add Employee</button>
      </div>
    </div>
  );
}

export default App;
