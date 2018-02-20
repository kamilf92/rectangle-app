import React from "react";

const ColorPicker = ({ label, color, onColorChanged }) => {
  return (
    <div className="color-picker">
      <label>{label}:</label>
      <input type="color" value={color} onChange = {e => onColorChanged(e.target.value)} />
    </div>
  );
};

export default ColorPicker;