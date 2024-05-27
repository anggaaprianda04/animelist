"use client";

import CardSkeleton from "@/components/Elements/CardSkeleton";
import HeaderMenu from "@/components/Elements/HeaderMenu";
import Pagination from "@/components/Elements/Pagination";
import CharacterList from "@/components/Fragments/CharacterList";
import Search from "@/components/Fragments/Search";
import useDebounce from "@/hooks/useDebounce";
import React, { useState, useEffect, useRef } from "react";

import { getAnimeResponse } from "../service/api-anime";

const Page = () => {
  const searchRef = useRef("");
  const [search, setSearch] = useState("");
  const [listCharacters, setListCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const debounceSearch = useDebounce(search, 3000);

  const fetchData = async () => {
    setLoading(true);
    await getAnimeResponse("characters", `page=${page}`)
      .then((res) => {
        setListCharacters(res);
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
    await getAnimeResponse("characters", `q=${search}&page=${page}`)
      .then((val) => {
        setListCharacters(val);
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
        {listCharacters.length != 0 && (
          <Search
            title="character"
            searchRef={searchRef}
            handleChange={handleChange}
          />
        )}
        {loading ? (
          <div className="mt-4">
            <CardSkeleton setGridCol="grid-cols-5" />
          </div>
        ) : (
          <>
            {search.length > 0 ? (
              <HeaderMenu title={`Result characters ${search}`} />
            ) : (
              <HeaderMenu title={`List Characters #${page}`} />
            )}
            <div className="px-2">
              <CharacterList characters={listCharacters} />
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
