import React from "react";

const ErrorText = ({ errorLabel }) => {
  return (
    <div className="flex items-center justify-center">
      <h1 className="text-2xl text-color-white">{`${errorLabel}!!`}</h1>
    </div>
  );
};

export default ErrorText;
