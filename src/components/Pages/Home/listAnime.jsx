"use client";

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
      <AnimeList
        isLoading={isloading}
        fetchError={fetchError}
        animes={getAnime}
      />
    </>
  );
};

export default ListAnime;
