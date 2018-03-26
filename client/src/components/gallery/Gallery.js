import React from "react";
import PropTypes from "prop-types";
import Preview from "../preview/Preview";
import "./Gallery.css";

const Gallery = ({ rectangles = [], onRectangleClick }) => {
	const galleryList = rectangles.map(rectangle => {
		return (
			<div className="gallery__item" onClick= {() => onRectangleClick(rectangle._id)} key={rectangle._id} >
				<Preview {...rectangle} />
				<p className="gallery__item__icon"><i className="material-icons medium">delete_forever</i></p>
			</div>
		);
	});

	return (
		<div className="gallery">
			{galleryList}
		</div>
	);
};

Gallery.propTypes = {
	rectangles: PropTypes.array,
	onRectangleClick: PropTypes.func.isRequired
};

export default Gallery;