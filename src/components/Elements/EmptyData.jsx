"use client";

import React from "react";
import { PiEmptyBold } from "react-icons/pi";

const EmptyData = ({ label }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-16">
      <PiEmptyBold size={72} className="text-color-accent" />
      <h1 className="mt-4 text-3xl text-center text-color-white">
        {`Search result ${label} are empty!`}
      </h1>
    </div>
  );
};

export default EmptyData;
