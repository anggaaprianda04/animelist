"use client";

import CardSkeleton from "@/components/Elements/CardSkeleton";
import AnimeRecomended from "@/components/Fragments/AnimeRecomended";
import useFetchData from "@/hooks/useFetchData";
import { getNestedAnime, reproduce } from "@/utils";
import React, { useEffect, useState } from "react";

const ListAnimeRecom = () => {
  const [animeRecom, setAnimeRecom] = useState({});
  const { data, fetchError, isloading } = useFetchData("top/anime", "limit=8");

  useEffect(() => {
    setAnimeRecom(data);
  }, [data]);

  return (
    <>
      {isloading && <CardSkeleton />}
      {!isloading && fetchError && (
        <div>
          <h1>{fetchError}</h1>
        </div>
      )}
      {!isloading && !fetchError && <AnimeRecomended animeRecom={animeRecom} />}
    </>
  );
};

export default ListAnimeRecom;
