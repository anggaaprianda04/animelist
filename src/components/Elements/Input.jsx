import React from "react";

const Input = ({ onChange, searchRef, title }) => {
  return (
    <div className="relative px-2 sm:px-0">
      <input
        ref={searchRef}
        className="w-full p-2 mt-2 mb-2 rounded-lg sm:w-64 text-color-white sm:mb-0 md:mt-0 bg-color-secondary focus:outline-none focus:ring-4 focus:ring-offset-color-secondary focus:transition-all focus:duration-100"
        type="text"
        onChange={onChange}
        placeholder={`Search ${title}..`}
      />
    </div>
  );
};

export default Input;
