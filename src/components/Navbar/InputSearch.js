"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import React from "react";

const InputSearch = () => {
  const router = useRouter();
  const searchRef = React.useRef();
  let [checkNumber, setNumber] = React.useState(0);

  const handleSearch = (event) => {
    if (searchRef.current.value.length > 0) {
      if (event.key === 'Enter' || event.type === 'click') {
        event.preventDefault();
        const keyword = searchRef.current.value;
        router.push(`/search/${keyword}`);
      }
    } else {
      null
    }
  };

  const handleInput = () => {
    setNumber(searchRef.current.value.length);
  };

  return (
    <div className="relative">
      <input
        ref={searchRef}
        className="w-64 p-2 mt-2 rounded-md md:mt-0"
        type="text"
        onKeyDown={handleSearch}
        onChange={() => handleInput()}
        placeholder="Cari anime.."
      />
      {checkNumber <= 0 ? null : (
        <button onClick={handleSearch}>
          <MagnifyingGlass className="absolute top-1 end-3" size={30} />
        </button>
      )}
    </div>
  );
};

export default InputSearch;
