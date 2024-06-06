"use client";

import useFetchData from "@/hooks/useFetchData";
import React, { useEffect, useState, lazy, Suspense } from "react";

const HeaderMenu = lazy(() => import("@/components/Elements/HeaderMenu"));
const ErrorText = lazy(() => import("@/components/Elements/ErrorText"));
const CardSkeleton = lazy(() => import("@/components/Elements/CardSkeleton"));
const Pagination = lazy(() => import("@/components/Elements/Pagination"));
const AnimeList = lazy(() => import("@/components/Fragments/AnimeList"));
const MangaList = lazy(() => import("@/components/Fragments/MangaList"));
const CharacterList = lazy(() =>
  import("@/components/Fragments/CharacterList")
);
const MagazineList = lazy(() => import("@/components/Fragments/MagazineList"));

const ListData = ({ type, url }) => {
  const [getData, setData] = useState({});
  const [page, setPage] = useState(1);
  const { data, fetchError, isloading } = useFetchData(url, `page=${page}`);

  const loadData = (
    <div className="p-4">
      {type == "anime" && <CardSkeleton />}
      {type == "manga" && <CardSkeleton setGridCol="grid-cols-3" />}
      {type == "character" && <CardSkeleton setHeight="h-56" />}
      {type == "magazine" && <CardSkeleton setHeight="h-20" />}
    </div>
  );

  useEffect(() => {
    setData(data);
  }, [data, page]);

  return (
    <Suspense fallback={loadData}>
      <div className="p-4">
        {isloading && loadData}
        {!isloading && fetchError && <ErrorText errorLabel={fetchError} />}
        {!isloading && !fetchError && (
          <>
            {type == "anime" && <HeaderMenu title={`List anime #${page}`} />}
            {type == "manga" && <HeaderMenu title={`List manga #${page}`} />}
            {type == "character" && (
              <HeaderMenu title={`List character #${page}`} />
            )}
            {type == "magazine" && (
              <HeaderMenu title={`List Magazines #${page}`} />
            )}
            {type == "anime" && <AnimeList animes={getData} />}
            {type == "manga" && <MangaList getManga={getData} />}
            {type == "character" && <CharacterList characters={getData} />}
            {type == "magazine" && <MagazineList getMagazines={getData} />}
            <Pagination
              setPage={setPage}
              page={page}
              lastPage={getData.pagination?.last_visible_page}
              currentPage={getData.pagination?.current_page}
            />
          </>
        )}
      </div>
    </Suspense>
  );
};

export default ListData;
