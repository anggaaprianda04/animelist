"use client";

import React, { useState, useEffect } from "react";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import { getAnimeResponse } from "../service/api-anime";
import Loading from "../loading";
import Link from "next/link";

const Page = () => {
  const [page, setPage] = useState(1);
  const [magazines, setMagazines] = useState([]);
  const [loading, setLoading] = useState(false);

  const fecthData = async () => {
    setLoading(true);
    await getAnimeResponse("magazines", `page=${page}`)
      .then((res) => {
        setMagazines(res);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fecthData();
  }, [page]);

  return (
    <div className="px-4 mb-6">
      {loading ? (
        <Loading />
      ) : (
        <>
          <HeaderMenu title={`Manga Magazines #${page}`} />
          <div className="grid grid-cols-3 gap-4 mb-4 lg:grid-cols-5 md:grid-cols-4">
            {magazines.data?.map((magazine, index) => {
              return (
                <Link href={magazine.url} target="_blank" key={index}>
                  <div className="relative flex items-center justify-center w-full h-20 transition-colors rounded-md group text-color-white bg-color-dark hover:duration-75 hover:bg-color-white hover:text-color-dark">
                    <p className="text-xl font-semibold line-clamp-1">
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
          <Pagination
            page={page}
            setPage={setPage}
            lastPage={magazines.pagination?.last_visible_page}
            currentPage={magazines.pagination?.current_page}
          />
        </>
      )}
    </div>
  );
};

export default Page;
