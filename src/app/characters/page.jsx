"use client";

import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { IoIosStar } from "react-icons/io";

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

  console.log("data", listCharacters);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <HeaderMenu title={`List Characters page ${page}`} />
          <div className="grid grid-cols-5 gap-4 px-4 mb-4">
            {listCharacters.data?.map((character, index) => {
              return (
                <div
                  key={index}
                  className="p-3 transition-colors rounded-md bg-color-white hover:bg-color-dark hover:duration-75 hover:text-color-white">
                  <div className="flex justify-between gap-2">
                    <div className="flex flex-col justify-between">
                      <div className="flex flex-col">
                        <p className="text-xl font-semibold">
                          {character.name}
                        </p>
                        <p>{character.name_kanji}</p>
                      </div>
                      <div className="flex gap-3">
                        <p>Favorit : </p>
                        <div className="flex gap-1">
                          <p className="font-medium">{character.favorites}</p>
                          <IoIosStar size={21} className="text-color-accent" />
                        </div>
                      </div>
                    </div>
                    <Image
                      className="object-cover rounded-md w-44 h-44"
                      width={100}
                      height={100}
                      src={character.images.webp.image_url}
                      alt={character.images.webp.image_url}
                    />
                  </div>
                </div>
              );
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
