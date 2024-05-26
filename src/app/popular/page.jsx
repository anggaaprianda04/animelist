"use client";

import React, { useState, useEffect, useRef } from "react";
import { getAnimeResponse } from "../service/api-anime";
import useDebounce from "@/hooks/useDebounce";
import AnimeList from "@/components/Fragments/AnimeList";
import HeaderMenu from "@/components/Elements/HeaderMenu";
import CardSkeleton from "@/components/Elements/CardSkeleton";
import Pagination from "@/components/Elements/Pagination";
import Search from "@/components/Fragments/Search";

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
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  const handleChange = () => {
    setSearch(searchRef.current?.value);
    setLoading(true);
  };

  const handleSearchData = async () => {
    // if (search.trim() == "" || !search) return;
    await getAnimeResponse("anime", `q=${search}&page=${page}`)
      .then((val) => {
        console.log("masuk search", val);
        setTopAnime(val);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
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
          <Search title="anime" searchRef={searchRef} onChange={handleChange} />
        )}
        {loading ? (
          <>
            <div className="min-h-screen my-8">
              <CardSkeleton />
            </div>
          </>
        ) : (
          <>
            {search.length > 0 ? (
              <HeaderMenu title={`Result anime ${search}`} />
            ) : (
              <HeaderMenu title={`Anime Popular #${page}`} />
            )}
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
