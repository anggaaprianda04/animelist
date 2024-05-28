"use client";

import Link from "next/link";
import React from "react";

const MagazineList = ({ api }) => {
  return (
    <div className="grid grid-cols-3 gap-4 mb-4 lg:grid-cols-5 md:grid-cols-4">
      {api.data?.map((magazine, index) => {
        return (
          <Link href={magazine.url} target="_blank" key={index}>
            <div className="relative flex items-center justify-center w-full h-20 transition-colors rounded-md group text-color-white bg-color-secondary hover:duration-75 hover:bg-color-white hover:text-color-dark">
              <p className="px-2 text-xl font-semibold text-center line-clamp-1">
                {magazine.name}
              </p>
              <p className="absolute bottom-0 font-semibold right-2 ">
                Total : {magazine.count}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default MagazineList;
