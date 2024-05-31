"use client";

import CardSkeleton from "@/components/Elements/CardSkeleton";
import EmptyData from "@/components/Elements/EmptyData";
import HeaderMenu from "@/components/Elements/HeaderMenu";
import Pagination from "@/components/Elements/Pagination";
import CharacterList from "@/components/Fragments/CharacterList";
import Search from "@/components/Fragments/Search";
import useDebounce from "@/hooks/useDebounce";
import useFetchData from "@/hooks/useFetchData";
import React, { useState, useEffect, useRef } from "react";

import { getAnimeResponse } from "../service/api-anime";

const Page = () => {
  const searchRef = useRef("");
  const [search, setSearch] = useState("");
  const [listCharacters, setListCharacters] = useState({});
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const debounceSearch = useDebounce(search, 3000);
  const { data, fetchError, isloading } = useFetchData(
    "characters",
    `page=${page}`
  );

  const handleChange = () => {
    setSearch(searchRef.current?.value);
    setLoading(true);
  };

  const handleSearchData = async (valRes) => {
    await getAnimeResponse("characters", `q=${valRes}&page=${page}`)
      .then((val) => {
        setListCharacters(val);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    handleSearchData(search);
  }, [debounceSearch, page]);

  useEffect(() => {
    setListCharacters(data);
  }, [data, page]);

  return (
    <>
      <div className="p-2">
        {listCharacters.length != 0 && (
          <Search
            title="character"
            searchRef={searchRef}
            handleChange={handleChange}
          />
        )}
        {loading || isloading ? (
          <div className="mt-4">
            <CardSkeleton />
          </div>
        ) : (
          <>
            {search.length > 0 ? (
              <HeaderMenu title={`Result characters ${search}`} />
            ) : (
              <HeaderMenu title={`List Characters #${page}`} />
            )}
            <div className="px-2">
              {fetchError && (
                <div>
                  <h1>{fetchError}</h1>
                </div>
              )}
              {listCharacters.data?.length == 0 && (
                <EmptyData label="character" />
              )}
              {listCharacters.data?.length != 0 && (
                <CharacterList characters={listCharacters} />
              )}
            </div>
            {search.length == 0 && (
              <Pagination
                page={page}
                lastPage={listCharacters.pagination?.last_visible_page}
                currentPage={listCharacters.pagination?.current_page}
                setPage={setPage}
              />
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Page;
