import React from "react";
import PropTypes from "prop-types";

const Swipper = ({ label, type, onSwipperChanged, min = 1, max = 100, value = 50}) => {
	return (
		<div>
			<label>{label}:</label>
			<p className="range-field">
				<input type="range" min={min} max={max} value={value} onChange={(e) => onSwipperChanged(+e.target.value, type)} />
			</p>
		</div>
	);
};

Swipper.propTypes = {
	label: PropTypes.string,
	type: PropTypes.string,
	onSwipperChanged: PropTypes.func.isRequired,
	min: PropTypes.number,
	max: PropTypes.number,
	value: PropTypes.number
};

export default Swipper;