"use client";

import { getAnimeResponse } from "@/app/service/api-anime";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import CardSkeleton from "@/components/Utilities/CardSkeleton";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import React, { useEffect, useState } from "react";

export default function Page({ params }) {
  const { keyword } = params;
  const decodeUri = decodeURI(keyword);
  const [loading, setLoading] = useState(false);
  const [anime, setAnime] = useState({});
  const [page, setPage] = useState(1);

  console.log("search", decodeUri);

  const fetchData = async () => {
    setLoading(true);
    await getAnimeResponse("anime", `q=${decodeUri}&page=${page}`)
      .then((res) => {
        console.log("res", res);
        setAnime(res);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  console.log("anime", anime);

  return (
    <>
      <div className="p-2">
        {loading ? (
          <CardSkeleton />
        ) : (
          <>
            <section>
              <Header title={`Hasil pencarian ${decodeUri}....`} />
              <HeaderMenu
                title={`List anime by search ${decodeUri} #${page}`}
              />
              <AnimeList api={anime} />
            </section>
            {!anime.pagination?.has_next_page ? (
              <div></div>
            ) : (
              <Pagination
                setPage={setPage}
                page={page}
                currentPage={anime.pagination?.current_page}
                lastPage={anime.pagination?.last_visible_page}
              />
            )}
          </>
        )}
      </div>
    </>
  );
}
