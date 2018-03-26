import React from "react";
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

export default Preview;