"use client";

import CardSkeleton from "@/components/Elements/CardSkeleton";
import AnimeList from "@/components/Fragments/AnimeList";
import useFetchData from "@/hooks/useFetchData";
import React, { useEffect, useState } from "react";

const ListAnime = () => {
  const [getAnime, setGetAnime] = useState({});
  const { data, fetchError, isloading } = useFetchData("anime", "limit=18");

  useEffect(() => {
    setGetAnime(data);
  }, [data]);

  return (
    <>
      {isloading && <CardSkeleton />}
      {!isloading && fetchError && (
        <div>
          <h1>{fetchError}</h1>
        </div>
      )}
      {!isloading && !fetchError && (
        <AnimeList
          isLoading={isloading}
          fetchError={fetchError}
          animes={getAnime}
        />
      )}
    </>
  );
};

export default ListAnime;
