import React from "react";
import { Panel as ColorPickerPanel } from "rc-color-picker";
import "rc-color-picker/assets/index.css";

const ColorPicker = ({ label, color, onColorChanged }) => {
  return (
    <div className="color-picker">
      <label>{label}:</label>
      <ColorPickerPanel enableAlpha={false} color={color} onChange={onColorChanged} mode="RGB" />
    </div>
  );
};

export default ColorPicker;