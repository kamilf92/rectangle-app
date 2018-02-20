import React from "react";
import Preview from "../preview/Preview";

const Gallery = ({ rectangles }) => {
  const galleryList = rectangles.map(rectangle => {
    return (
        <Preview {...rectangle} key={rectangle._id} />
    );
  });

  return (
    <div className="gallery">
	    {galleryList}
    </div>
  );
};

export default Gallery;