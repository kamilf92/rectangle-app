import React from "react";

const Loader = ({ title, link }) => {
  return (
    <div className="progress">
      <div className="indeterminate"></div>
    </div>     
  );
};

export default Loader;