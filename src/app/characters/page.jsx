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
  const [listCharacters, setListCharacters] = useState({});
  const [page, setPage] = useState(1);
  const { data, fetchError, isloading } = useFetchData(
    "characters",
    `page=${page}`
  );

  // const handleChange = () => {
  //   setSearch(searchRef.current?.value);
  //   setLoading(true);
  // };

  // const handleSearchData = async (valRes) => {
  //   await getAnimeResponse("characters", `q=${valRes}&page=${page}`)
  //     .then((val) => {
  //       setListCharacters(val);
  //     })
  //     .catch((error) => console.log(error))
  //     .finally(() => setLoading(false));
  // };

  // useEffect(() => {
  //   handleSearchData(search);
  // }, [debounceSearch, page]);

  useEffect(() => {
    setListCharacters(data);
  }, [data, page]);

  return (
    <>
      <div className="p-4">
        <div className="px-3">
          {isloading && <CardSkeleton setHeight="h-56" />}
          {!isloading && fetchError && (
            <div>
              <h1>{fetchError}</h1>
            </div>
          )}
          {!isloading && !fetchError && (
            <>
              <HeaderMenu title={`List Characters #${page}`} />
              <CharacterList characters={listCharacters} />
              <Pagination
                setPage={setPage}
                page={page}
                lastPage={listCharacters.pagination?.last_visible_page}
                currentPage={listCharacters.pagination?.current_page}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
