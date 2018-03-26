import React from "react";
import PropTypes from "prop-types";
import { Panel as ColorPickerPanel } from "rc-color-picker";
import "rc-color-picker/assets/index.css";
import "./ColorPicker.css";

const ColorPicker = ({ label, color, onColorChanged }) => {
	return (
		<div className="color-picker">
			<label>{label}:</label>
			<ColorPickerPanel enableAlpha={false} color={color} onChange={onColorChanged} mode="RGB" />
		</div>
	);
};

ColorPicker.propTypes = {
	label: PropTypes.string,
	color: PropTypes.string,
	onColorChanged: PropTypes.func.isRequired
};

export default ColorPicker;