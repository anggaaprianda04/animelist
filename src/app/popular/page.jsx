"use client";

import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import React, { useState, useEffect } from "react";
import { getAnimeResponse } from "../service/api-anime";

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const fetchData = async () => {
    const animePopuler = await getAnimeResponse("top/anime", `page=${page}`);
    setTopAnime(animePopuler);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  // console.log("ini", topAnime);

  return (
    <div className="p-2">
      <HeaderMenu title={`Anime Terpopular #${page}`} />
      <AnimeList api={topAnime} />
      <Pagination
        setPage={setPage}
        page={page}
        currentPage={topAnime.pagination?.current_page}
        lastPage={topAnime.pagination?.last_visible_page}
      />
    </div>
  );
};

export default Page;
