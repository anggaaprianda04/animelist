"use client";

import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import InputSearch from "@/components/Utilities/InputSearch";
import Pagination from "@/components/Utilities/Pagination";
import React, { useState, useEffect, useRef } from "react";
import { getAnimeResponse } from "../service/api-anime";
import useDebounce from "@/hooks/useDebounce";
import CardSkeleton from "@/components/Utilities/CardSkeleton";

const Page = () => {
  const searchRef = useRef("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);
  const [loading, setLoading] = useState(false);
  const debounceSearch = useDebounce(search, 3000);

  const fetchData = async () => {
    setLoading(true);
    await getAnimeResponse("top/anime", `page=${page}`)
      .then((val) => {
        setTopAnime(val);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const handleChange = () => {
    setSearch(searchRef.current?.value);
    setLoading(true);
  };

  const handleSearchData = async () => {
    if (search.trim() == "" || !search) return;
    await getAnimeResponse("anime", `q=${search}&page=${page}`)
      .then((val) => {
        console.log("masuk search", val);
        setTopAnime(val);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    handleSearchData();
  }, [debounceSearch, page]);

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <div className="p-2">
        {topAnime.length != 0 && (
          <div className="flex justify-end mt-4 mr-2">
            <InputSearch searchRef={searchRef} onChange={handleChange} />
          </div>
        )}
        {search.length > 0 && (
          <h1 className="text-2xl font-bold text-color-white">{`Hasil pencarian ${search}`}</h1>
        )}
        {loading ? (
          <>
            <div className="min-h-screen my-8">
              <CardSkeleton />
            </div>
          </>
        ) : (
          <>
            <HeaderMenu title={`Anime Popular #${page}`} />
            <AnimeList api={topAnime} />
            {!search.length > 0 && (
              <Pagination
                setPage={setPage}
                page={page}
                currentPage={topAnime.pagination?.current_page}
                lastPage={topAnime.pagination?.last_visible_page}
              />
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Page;
