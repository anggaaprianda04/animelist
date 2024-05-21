"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import React from "react";

const InputSearch = () => {
  const router = useRouter();
  const searchRef = React.useRef();
  let [checkNumber, setNumber] = React.useState(0);

  const handleSearch = (event) => {
    const keyword = searchRef.current.value;

    if (!keyword || keyword.trim() == "") return;

    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      router.push(`/search/${keyword}`);
    }
  };

  const handleInput = () => {
    setNumber(searchRef.current.value.length);
  };

  // console.log("ketik", searchRef.current.value);

  return (
    <div className="relative">
      <input
        ref={searchRef}
        className="w-64 p-2 mt-2 rounded-lg text-color-white md:mt-0 bg-color-secondary focus:outline-none focus:ring-4 focus:ring-offset-color-secondary focus:transition-all focus:duration-100"
        type="text"
        onKeyDown={handleSearch}
        onChange={() => handleInput()}
        placeholder="Search anime.."
      />
      {checkNumber <= 0 ? null : (
        <button onClick={handleSearch}>
          <MagnifyingGlass
            className="absolute text-color-white top-2 end-3"
            size={22}
          />
        </button>
      )}
    </div>
  );
};

export default InputSearch;
