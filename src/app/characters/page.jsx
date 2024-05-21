"use client";

import CardCharacter from "@/components/Utilities/CardCharacter";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import React, { useState, useEffect } from "react";

import Loading from "../loading";
import { getAnimeResponse } from "../service/api-anime";

const Page = () => {
  const [listCharacters, setListCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchDataCharacters = async () => {
    setLoading(true);
    await getAnimeResponse("characters", `page=${page}`)
      .then((res) => {
        setListCharacters(res);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchDataCharacters();
  }, [page]);

  // console.log("data", listCharacters);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <HeaderMenu title={`List Characters #${page}`} />
          <div className="grid grid-cols-5 gap-4 px-4 mb-4">
            {listCharacters.data?.map((character, index) => {
              return <CardCharacter character={character} index={index} />;
            })}
          </div>
          <Pagination
            page={page}
            lastPage={listCharacters.pagination?.last_visible_page}
            currentPage={listCharacters.pagination?.current_page}
            setPage={setPage}
          />
          <div className="mt-5"></div>
        </>
      )}
    </>
  );
};

export default Page;