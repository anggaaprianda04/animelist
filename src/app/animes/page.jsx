"use client";

import React, { useState, useEffect } from "react";
import HeaderMenu from "@/components/Elements/HeaderMenu";
import AnimeList from "@/components/Fragments/AnimeList";
import CardSkeleton from "@/components/Elements/CardSkeleton";
import Pagination from "@/components/Elements/Pagination";
import useFetchData from "@/hooks/useFetchData";

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState({});
  const { data, fetchError, isloading } = useFetchData("anime", `page=${page}`);

  useEffect(() => {
    setTopAnime(data);
  }, [data, page]);

  return (
    <>
      <div className="p-4">
        <div className="px-3">
          {isloading && <CardSkeleton />}
          {!isloading && fetchError && (
            <div>
              <h1>{fetchError}</h1>
            </div>
          )}
          {!isloading && !fetchError && (
            <>
              <HeaderMenu title={`List anime #${page}`} />
              <AnimeList animes={topAnime} />
              <Pagination
                setPage={setPage}
                page={page}
                lastPage={topAnime.pagination?.last_visible_page}
                currentPage={topAnime.pagination?.current_page}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
