"use client";

import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import React, { useState, useEffect } from "react";
import Loading from "../loading";
import { getAnimeResponse } from "../service/api-anime";

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    await getAnimeResponse("top/anime", `page=${page}`)
      .then((val) => {
        setTopAnime(val);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div className="p-2">
      {loading ? (
        <Loading />
      ) : (
        <>
          <HeaderMenu title={`Anime Popular #${page}`} />
          <AnimeList api={topAnime} />
          <Pagination
            setPage={setPage}
            page={page}
            currentPage={topAnime.pagination?.current_page}
            lastPage={topAnime.pagination?.last_visible_page}
          />
        </>
      )}
    </div>
  );
};

export default Page;
