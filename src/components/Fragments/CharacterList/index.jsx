"use client";

import CardSkeleton from "@/components/Elements/CardSkeleton";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoIosStar } from "react-icons/io";

const CharacterList = ({ characters }) => {
  const [listCharacters, setCharater] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    return () => {
      setCharater(characters);
      setLoading(false);
    };
  }, [characters]);

  return (
    <>
      {!loading ? (
        <CardSkeleton setHeight="h-56" setGridCol="grid-cols-5" />
      ) : (
        <div className="grid grid-cols-1 gap-4 mb-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {listCharacters.data?.map((character, index) => {
            return (
              <Link href={character.url} target="_blank" key={index}>
                <div className="p-3 transition-colors rounded-md hover:shadow-color-secondary bg-color-secondary hover:bg-color-dark hover:duration-75 hover:shadow-2xl text-color-white">
                  <div className="flex justify-between gap-2">
                    <div className="flex flex-col justify-between w-1/2">
                      <div className="flex flex-col">
                        <p className="text-lg font-semibold">
                          {character?.name}
                        </p>
                        <p>{character?.name_kanji}</p>
                      </div>
                      <div className="flex gap-3">
                        <p>Favorit</p>
                        <div className="flex gap-1">
                          <p className="font-medium">{character?.favorites}</p>
                          <IoIosStar size={21} className="text-color-accent" />
                        </div>
                      </div>
                    </div>
                    <Image
                      className="object-cover transition-opacity opacity-0 duration-[1s] w-2/5 rounded-md h-44"
                      width={100}
                      onLoadingComplete={(e) => e.classList.remove("opacity-0")}
                      height={100}
                      src={character?.images?.webp.image_url}
                      alt={character?.images?.webp.image_url}
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default CharacterList;
