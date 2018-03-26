import React from "react";
import PropTypes from "prop-types";
import "./Preview.css";

const Preview = ({ width, height, color, radius }) => {
	const styles = {
		width,
		height,
		backgroundColor: color,
		borderRadius: radius + "%"
	};

	return (
		<div className="card preview">
			<div style={styles} className="preview__content" />
		</div>
	);
};

Preview.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	color: PropTypes.string,
	radius: PropTypes.number
};

export default Preview;