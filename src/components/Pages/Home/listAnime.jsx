"use client";

import React, { useEffect, useState, lazy } from "react";
import useFetchData from "@/hooks/useFetchData";

const AnimeList = lazy(() => import("@/components/Fragments/AnimeList"));
const CardSkeleton = lazy(() => import("@/components/Elements/CardSkeleton"));
const ErrorText = lazy(() => import("@/components/Elements/ErrorText"));

const ListAnime = () => {
  const [getAnime, setGetAnime] = useState({});
  const { data, fetchError, isloading } = useFetchData("anime", "limit=18");

  useEffect(() => {
    setGetAnime(data);
  }, [data]);

  return (
    <>
      {isloading && <CardSkeleton />}
      {!isloading && fetchError && <ErrorText errorLabel={fetchError} />}
      {!isloading && !fetchError && <AnimeList animes={getAnime} />}
    </>
  );
};

export default ListAnime;
