"use client";

import CardSkeleton from "@/components/Elements/CardSkeleton";
import EmptyData from "@/components/Elements/EmptyData";
import HeaderMenu from "@/components/Elements/HeaderMenu";
import Pagination from "@/components/Elements/Pagination";
import MangaList from "@/components/Fragments/MangaList";
import Search from "@/components/Fragments/Search";
import useDebounce from "@/hooks/useDebounce";
import useFetchData from "@/hooks/useFetchData";
import React, { useEffect, useRef, useState } from "react";
import { getAnimeResponse } from "../service/api-anime";

const Page = () => {
  const searchRef = useRef("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [listManga, setListManga] = useState({});
  const debounceSearch = useDebounce(search, 3000);
  const { data, fetchError, isloading } = useFetchData("manga", `page=${page}`);

  const handleChange = () => {
    setSearch(searchRef.current?.value);
    setLoading(true);
  };

  const handleSearchData = async () => {
    await getAnimeResponse("manga", `q=${search}&page=${page}`)
      .then((val) => {
        console.log("masuk search", val);
        setListManga(val);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    handleSearchData();
  }, [debounceSearch, page]);

  useEffect(() => {
    setListManga(data);
  }, [data, page]);

  return (
    <>
      <div className="p-2">
        {listManga.length != 0 && (
          <div className="flex justify-start mt-4">
            <Search
              title="manga"
              searchRef={searchRef}
              handleChange={handleChange}
            />
          </div>
        )}
        {loading || isloading ? (
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
            {!isloading && fetchError && (
              <div>
                <h1>{fetchError}</h1>
              </div>
            )}
            {listManga.data?.length == 0 && <EmptyData label="manga" />}
            {listManga.data?.length != 0 && <MangaList getMangas={listManga} />}
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
