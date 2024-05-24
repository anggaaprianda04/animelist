"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import React from "react";

const InputSearch = ({ onChange, searchRef }) => {
  // const router = useRouter();
  // const searchRef = useRef("");
  // const [number, setNumber] = useState(0);

  // const handleSearch = (event) => {
  //   const keyword = searchRef.current.value;

  //   if (!keyword || keyword.trim() == "") return;

  //   if (event.key === "Enter" || event.type === "click") {
  //     router.push(`/search/${keyword}`);
  //     event.preventDefault();
  //   }
  // };

  // const handleInput = () => {
  //   setNumber(searchRef.current.value.length);
  // };

  // console.log("ketik", searchRef.current?.value);

  return (
    <div className="relative px-2 sm:px-0">
      <input
        ref={searchRef}
        className="w-full p-2 mt-2 mb-2 rounded-lg sm:w-64 text-color-white sm:mb-0 md:mt-0 bg-color-secondary focus:outline-none focus:ring-4 focus:ring-offset-color-secondary focus:transition-all focus:duration-100"
        type="text"
        onChange={onChange}
        placeholder="Search anime.."
      />
      {/* {number <= 0 ? null : (
        <button onClick={handleSearch}>
          <MagnifyingGlass
            className="absolute text-color-white top-2 end-3"
            size={22}
          />
        </button>
      )} */}
    </div>
  );
};

export default InputSearch;
