import React from "react";
import "./ErrorMessage.css";

const ErrorMessage = () => {
  return (
    <div className="error-message">
        <span className="error-message__text grey-text">Something went wrong :(</span>
    </div>
  );
};

export default ErrorMessage;