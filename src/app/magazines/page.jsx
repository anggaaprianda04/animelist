"use client";

import React, { useState, useEffect } from "react";
import { getAnimeResponse } from "../service/api-anime";
import HeaderMenu from "@/components/Elements/HeaderMenu";
import Pagination from "@/components/Elements/Pagination";
import MagazineList from "@/components/Fragments/MagazineList";
import CardSkeleton from "@/components/Elements/CardSkeleton";

const Page = () => {
  const [page, setPage] = useState(1);
  const [magazines, setMagazines] = useState([]);
  const [loading, setLoading] = useState(false);

  const fecthData = async () => {
    setLoading(true);
    await getAnimeResponse("magazines", `page=${page}`)
      .then((res) => {
        setMagazines(res);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fecthData();
  }, [page]);

  return (
    <div className="px-4">
      {loading ? (
        <div className="mt-4">
          <CardSkeleton setHeight="h-20" />
        </div>
      ) : (
        <>
          <HeaderMenu title={`List Magazines #${page}`} />
          <MagazineList api={magazines} />
          <Pagination
            page={page}
            setPage={setPage}
            lastPage={magazines.pagination?.last_visible_page}
            currentPage={magazines.pagination?.current_page}
          />
        </>
      )}
    </div>
  );
};

export default Page;
