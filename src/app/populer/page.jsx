"use client";

import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import React, { useState, useEffect } from "react";

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      `${process.env.baseUrl}/top/anime?page=${page}`
    );
    const data = await response.json();
    setTopAnime(data);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  console.log(topAnime);

  return (
    <div className="p-2">
      <HeaderMenu title={`Anime Terpopuler #${page}`} />
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
