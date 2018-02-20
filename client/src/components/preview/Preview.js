import React from "react";

const Preview = ({ width, height, color, radius }) => {
    const styles = {
        width,
        height,
        backgroundColor: color,
        borderRadius: radius
    };

  return (
    <div className="card white preview">
      <div style={styles}></div>
    </div>
  );
};

export default Preview;