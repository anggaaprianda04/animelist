"use client";

import MangaList from "@/components/MangaList";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import React, { useEffect, useState } from "react";
import Loading from "../loading";
import { getAnimeResponse } from "../service/api-anime";

const Page = () => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [listManga, setListManga] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    await getAnimeResponse("manga", `page=${page}`)
      .then((res) => {
        setListManga(res);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  console.log(`manga ${page}`, listManga);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="px-4">
          <HeaderMenu title={`List Manga page ${page}`} />
          <MangaList api={listManga} />
          <div className="mb-10"></div>
          <Pagination
            currentPage={listManga.pagination?.current_page}
            lastPage={listManga.pagination?.last_visible_page}
            setPage={setPage}
            page={page}
          />
        </div>
      )}
    </>
  );
};

export default Page;
