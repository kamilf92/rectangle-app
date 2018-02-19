import React from "react";

const Preview = ({ width, height, color, radius }) => {
    const styles = {
        width,
        height,
        backgroundColor: color,
        borderRadius: radius
    };

  return (
    <div style={styles}></div>
  );
};

export default Preview;