"use client";

import { parseData } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import CardSkeleton from "../Utilities/CardSkeleton";

const MangaList = ({ api }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    return () => {
      api;
      setLoading(false);
    };
  }, null);

  return (
    <>
      {loading ? (
        <div className="grid grid-cols-3 gap-4 ">
          {api.data?.map((manga, index) => {
            return (
              <Link key={index} href={manga.url} target={"_blank"}>
                <div className="flex gap-2 p-4 font-medium rounded-md cursor-pointer hover:duration-75 hover:shadow-2xl hover:shadow-color-accent text-color-white h-72 bg-color-dark">
                  <Image
                    className="w-32"
                    width={100}
                    height={100}
                    priority={true}
                    quality={80}
                    style={{ objectFit: "cover" }}
                    src={manga.images.webp.large_image_url}
                    alt={manga.images.webp.large_image_url}
                  />
                  <div className="flex flex-col justify-between w-full">
                    <div className="flex flex-col gap-2 p-2 rounded-md bg-color-secondary">
                      <p className="line-clamp-1">Title : {manga.title}</p>
                      <p>Published : {manga.published.string}</p>
                      <p>Chapter : {manga.chapters ?? "-"}</p>
                      <p className="line-clamp-1">
                        Genre : {parseData(manga.genres)}
                      </p>
                      <p className="line-clamp-1">
                        Author : {parseData(manga.authors)}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex flex-col items-center w-28">
                        <span className="w-full px-3 text-center rounded-md bg-color-primary">
                          Score
                        </span>
                        <span className="align-middle">{manga.score}</span>
                        <span className="text-sm align-middle">
                          {manga.scored_by} users
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <p>Rangked</p>
                        <span>{manga.rank}</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <p>Popularity</p>
                        <span>{manga.popularity}</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <p>Members</p>
                        <span>{manga.members}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <CardSkeleton />
      )}
    </>
  );
};

export default MangaList;
