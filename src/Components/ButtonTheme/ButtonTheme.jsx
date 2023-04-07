import React from "react";
import "./ButtonTheme.css";

const ButtonTheme = ({ onClick }) => {
  return (
    <div className="toggleDark">
      <input
        type="checkbox"
        className="checkbox"
        id="checkbox"
        onClick={onClick}
       
      />
      <label htmlFor="checkbox" className="label">
        <span className="moon">🌙</span>
        <span className="sun">☀️</span>
        <div className="ball" />
      </label>
    </div>
  );
};

export default ButtonTheme;