"use client";

import React, { useEffect, useState, lazy } from "react";
import useFetchData from "@/hooks/useFetchData";

const AnimeRecomended = lazy(() =>
  import("@/components/Fragments/AnimeRecomended")
);
const CardSkeleton = lazy(() => import("@/components/Elements/CardSkeleton"));
const ErrorText = lazy(() => import("@/components/Elements/ErrorText"));

const ListAnimeRecom = () => {
  const [animeRecom, setAnimeRecom] = useState({});
  const { data, fetchError, isloading } = useFetchData("top/anime", "limit=8");

  useEffect(() => {
    setAnimeRecom(data);
  }, [data]);

  return (
    <>
      {isloading && <CardSkeleton />}
      {!isloading && fetchError && <ErrorText errorLabel={fetchError} />}
      {!isloading && !fetchError && <AnimeRecomended animeRecom={animeRecom} />}
    </>
  );
};

export default ListAnimeRecom;
