"use client";

import React, { useState, useEffect } from "react";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import { getAnimeResponse } from "../service/api-anime";

const Page = () => {
  const [page, setPage] = useState(1);
  const [magazines, setMagazines] = useState([]);

  const fecthData = async () => {
    const magazines = await getAnimeResponse("magazines", `page=${page}`);
    setMagazines(magazines);
  };

  useEffect(() => {
    fecthData();
  }, [page]);

  console.log(magazines);

  return (
    <div className="px-4 mb-6">
      <HeaderMenu title={`Manga Magazines #${page}`} />
      <div className="grid grid-cols-3 gap-4 mb-4 lg:grid-cols-5 md:grid-cols-4">
        {magazines.data?.map((magazine, index) => {
          return (
            <div
              key={index}
              className="relative flex items-center justify-center w-full h-20 rounded-md bg-color-dark">
              <p className="text-xl font-semibold line-clamp-1 text-color-white">
                {magazine.name}
              </p>
              <p className="absolute bottom-0 font-semibold right-2 text-color-white">
                Total : {magazine.count}
              </p>
            </div>
          );
        })}
      </div>
      <Pagination
        page={page}
        setPage={setPage}
        lastPage={magazines.pagination?.last_visible_page}
        currentPage={magazines.pagination?.current_page}
      />
    </div>
  );
};

export default Page;
