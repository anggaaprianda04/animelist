"use client";

import React, { useState, useEffect } from "react";
import { getAnimeResponse } from "../service/api-anime";
import HeaderMenu from "@/components/Elements/HeaderMenu";
import Pagination from "@/components/Elements/Pagination";
import MagazineList from "@/components/Fragments/MagazineList";
import CardSkeleton from "@/components/Elements/CardSkeleton";
import useFetchData from "@/hooks/useFetchData";

const Page = () => {
  const [page, setPage] = useState(1);
  const [magazines, setMagazines] = useState({});
  const { data, fetchError, isloading } = useFetchData(
    "magazines",
    `page=${page}`
  );

  useEffect(() => {
    setMagazines(data);
  }, [data, page]);

  return (
    <div className="p-4">
      <div className="px-3">
        {isloading && <CardSkeleton setHeight="h-20" />}
        {!isloading && fetchError && (
          <div>
            <h1>{fetchError}</h1>
          </div>
        )}
        {!isloading && !fetchError && (
          <>
            <HeaderMenu title={`List Magazines #${page}`} />
            <MagazineList api={magazines} />
            <Pagination
              page={page}
              setPage={setPage}
              lastPage={magazines.pagination?.last_visible_page}
              currentPage={magazines.pagination?.current_page}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Page;
