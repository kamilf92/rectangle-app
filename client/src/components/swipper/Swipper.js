import React from "react";

const Swipper = ({ label, type, onSwipperChanged, min = 1, max = 100, value = 50}) => {
  return (
    <div>
        <label>{label}:</label>
        <p className="range-field">
        <input type="range" min={min} max={max} value={value} onChange = {e => onSwipperChanged(+e.target.value, type)} />
        </p>
    </div>  
  );
};

export default Swipper;