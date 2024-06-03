"use client";

import { getAnimeResponse } from "@/app/service/api-anime";
import CardSkeleton from "@/components/Elements/CardSkeleton";
import HeaderMenu from "@/components/Elements/HeaderMenu";
import Pagination from "@/components/Elements/Pagination";
import AnimeList from "@/components/Fragments/AnimeList";
import Header from "@/components/Fragments/AnimeList/Header";
import Search from "@/components/Fragments/Search";
import useDebounce from "@/hooks/useDebounce";
import React, { useEffect, useState, ReactDOM } from "react";
import ListAnime from "./listAnime";
import ListAnimeRecom from "./listAnimeRecom";

const Index = () => {
  const [search, setSearch] = useState("");
  const [searchAnime, setSearchAnime] = useState({});
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const debounceSearch = useDebounce(search, 3000);

  const handleChange = (event) => {
    setSearch(event.target?.value);
    setLoading(true);
  };

  const handleSearch = async () => {
    if (search.trim() == "") {
      setSearchAnime({});
      setLoading(false);
      return;
    }
    await getAnimeResponse("anime", `q=${search}&page=${page}`)
      .then((res) => setSearchAnime(res))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    handleSearch();
  }, [debounceSearch, page]);

  return (
    <>
      <div className="relative flex justify-start sm:justify-end">
        <div className="absolute right-0 w-full mt-6 sm:right-72 sm:w-0">
          <Search
            value={search}
            handleChange={(e) => handleChange(e)}
            title="anime"
          />
        </div>
      </div>
      <div className="mt-20 sm:mt-14">
        {search.length > 0 && (
          <h1 className="text-2xl font-semibold text-color-white">{`Result anime ${search}`}</h1>
        )}
        {loading && (
          <div className="mt-4">
            <CardSkeleton />
          </div>
        )}
        {!loading && (
          <>
            {searchAnime == {} && <HeaderMenu title={`List anime #${page}`} />}
            <AnimeList animes={searchAnime} />
            {searchAnime.data?.length > 0 && (
              <Pagination
                setPage={setPage}
                page={page}
                lastPage={searchAnime.pagination?.last_visible_page}
                currentPage={searchAnime.pagination?.current_page}
              />
            )}
          </>
        )}
        {search.trim() == "" && (
          <>
            {loading ? (
              <div></div>
            ) : (
              <>
                <section className="mt-4">
                  <Header title="Anime Recommendation" />
                  <ListAnimeRecom />
                </section>
                <section className="mt-4 ">
                  <Header title="Anime" link="/animes" />
                  <ListAnime />
                </section>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Index;
