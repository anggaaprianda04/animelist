"use client";

import useFetchData from "@/hooks/useFetchData";
import { ENUM } from "@/utils";
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
      {type == ENUM.ANIME && <CardSkeleton />}
      {type == ENUM.MANGA && <CardSkeleton setGridCol="grid-cols-3" />}
      {type == ENUM.CHARACTER && <CardSkeleton setHeight="h-56" />}
      {type == ENUM.MAGAZINE && <CardSkeleton setHeight="h-20" />}
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
            {type == ENUM.ANIME && <HeaderMenu title={`List anime #${page}`} />}
            {type == ENUM.MANGA && <HeaderMenu title={`List manga #${page}`} />}
            {type == ENUM.CHARACTER && (
              <HeaderMenu title={`List character #${page}`} />
            )}
            {type == ENUM.MAGAZINE && (
              <HeaderMenu title={`List Magazines #${page}`} />
            )}
            {type == ENUM.ANIME && <AnimeList animes={getData} />}
            {type == ENUM.MANGA && <MangaList getManga={getData} />}
            {type == ENUM.CHARACTER && <CharacterList characters={getData} />}
            {type == ENUM.MAGAZINE && <MagazineList getMagazines={getData} />}
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
