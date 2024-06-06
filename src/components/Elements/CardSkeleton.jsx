import React from "react";

const CardSkeleton = ({ setGridCol = "grid-cols-6", setHeight = "h-80" }) => {
  const listNumber = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <div className={`grid grid-cols-2 md:grid-cols-4 xl:${setGridCol} gap-4`}>
        {listNumber.map((data, index) => {
          return (
            <div
              key={index}
              className={`flex items-center w-full justify-center rounded-lg ${setHeight} bg-color-secondary animate-pulse dark:bg-color-secondary`}>
              <div role="status"></div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CardSkeleton;
