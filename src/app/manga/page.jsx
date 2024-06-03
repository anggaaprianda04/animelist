"use client";

import CardSkeleton from "@/components/Elements/CardSkeleton";
import HeaderMenu from "@/components/Elements/HeaderMenu";
import Pagination from "@/components/Elements/Pagination";
import MangaList from "@/components/Fragments/MangaList";
import useFetchData from "@/hooks/useFetchData";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [page, setPage] = useState(1);
  const [listManga, setListManga] = useState({});
  const { data, fetchError, isloading } = useFetchData("manga", `page=${page}`);

  useEffect(() => {
    setListManga(data);
  }, [data, page]);

  return (
    <>
      <div className="p-4">
        <div className="px-3">
          {isloading && <CardSkeleton setGridCol="grid-cols-3" />}
          {!isloading && fetchError && (
            <div>
              <h1>{fetchError}</h1>
            </div>
          )}
          {!isloading && !fetchError && (
            <>
              <HeaderMenu title={`List manga #${page}`} />
              <MangaList getManga={listManga} />
              <Pagination
                setPage={setPage}
                page={page}
                lastPage={listManga.pagination?.last_visible_page}
                currentPage={listManga.pagination?.current_page}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
