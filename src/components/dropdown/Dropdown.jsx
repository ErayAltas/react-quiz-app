import React from "react";
import "./Dropdown.css";

const Dropdown = ({ modes, setChangeMode }) => {
  return (
    <div className="dropdown">
      <select onChange={(e) => setChangeMode(e.target.value)} name="" id="">
        {modes.map((mode, i) => (
          <option key={i} value={mode}>
            {mode}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
