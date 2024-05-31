"use client";

import React, { useState, useEffect, useRef } from "react";
import { getAnimeResponse } from "../service/api-anime";
import useDebounce from "@/hooks/useDebounce";
import HeaderMenu from "@/components/Elements/HeaderMenu";
import AnimeList from "@/components/Fragments/AnimeList";
import Search from "@/components/Fragments/Search";
import CardSkeleton from "@/components/Elements/CardSkeleton";
import Pagination from "@/components/Elements/Pagination";
import useFetchData from "@/hooks/useFetchData";
import EmptyData from "@/components/Elements/EmptyData";

const Page = () => {
  const searchRef = useRef("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState({});
  const [loading, setLoading] = useState(false);
  const debounceSearch = useDebounce(search, 3000);
  const { data, fetchError, isloading } = useFetchData("anime", `page=${page}`);

  const handleChange = () => {
    setSearch(searchRef.current?.value);
    setLoading(true);
  };

  const handleSearchData = async () => {
    await getAnimeResponse("anime", `q=${search}&page=${page}`)
      .then((val) => {
        setTopAnime(val);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    handleSearchData();
  }, [debounceSearch, page]);

  useEffect(() => {
    setTopAnime(data);
  }, [data, page]);

  return (
    <>
      <div className="p-2">
        {topAnime.length != 0 && (
          <div className="flex justify-end mt-4 mr-2">
            <Search
              searchRef={searchRef}
              title="anime"
              handleChange={handleChange}
            />
          </div>
        )}
        {search.length > 0 ? (
          <HeaderMenu title={`Result anime ${search}`} />
        ) : (
          <HeaderMenu title={`List anime #${page}`} />
        )}
        {loading || isloading ? (
          <>
            <div className="min-h-screen my-8">
              <CardSkeleton />
            </div>
          </>
        ) : (
          <>
            {!isloading && fetchError && (
              <div>
                <h1>{fetchError}</h1>
              </div>
            )}
            {topAnime.data?.length == 0 && <EmptyData label="anime" />}
            {topAnime.data?.length != 0 && (
              <div className="px-3">
                <AnimeList animes={topAnime} />
              </div>
            )}

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
