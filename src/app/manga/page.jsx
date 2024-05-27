"use client";

import CardSkeleton from "@/components/Elements/CardSkeleton";
import HeaderMenu from "@/components/Elements/HeaderMenu";
import Pagination from "@/components/Elements/Pagination";
import MangaList from "@/components/Fragments/MangaList";
import Search from "@/components/Fragments/Search";
import useDebounce from "@/hooks/useDebounce";
import React, { useEffect, useRef, useState } from "react";
import { getAnimeResponse } from "../service/api-anime";

const Page = () => {
  const searchRef = useRef("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [listManga, setListManga] = useState([]);
  const debounceSearch = useDebounce(search, 3000);

  const handleChange = () => {
    setSearch(searchRef.current?.value);
    setLoading(true);
  };

  useEffect(() => {
    const handleSearchData = async () => {
      // if (search.trim() == "" || !search) return;
      await getAnimeResponse("manga", `q=${search}&page=${page}`)
        .then((val) => {
          console.log("masuk search", val);
          setListManga(val);
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    };
    handleSearchData();
  }, [debounceSearch, page, search]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await getAnimeResponse("manga", `page=${page}`)
        .then((res) => {
          setListManga(res);
          setLoading(false);
        })
        .catch((error) => console.log(error));
    };
    fetchData();
  }, [page]);

  return (
    <>
      <div className="px-4">
        {listManga.length != 0 && (
          <Search
            title="manga"
            searchRef={searchRef}
            handleChange={handleChange}
          />
        )}
        {loading ? (
          <div className="mt-4">
            <CardSkeleton setGridCol="grid-cols-3" />
          </div>
        ) : (
          <>
            {search.length > 0 ? (
              <HeaderMenu title={`Result manga ${search}`} />
            ) : (
              <HeaderMenu title={`List manga #${page}`} />
            )}
            <MangaList api={listManga} />
            {search.length == 0 && (
              <Pagination
                currentPage={listManga.pagination?.current_page}
                lastPage={listManga.pagination?.last_visible_page}
                setPage={setPage}
                page={page}
              />
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Page;
