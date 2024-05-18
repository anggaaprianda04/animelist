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
                <div className="flex gap-4 p-4 font-medium rounded-md cursor-pointer hover:duration-75 hover:shadow-2xl hover:shadow-color-accent text-color-white h-72 bg-color-dark">
                  <Image
                    className="w-36"
                    width={100}
                    height={100}
                    priority={true}
                    quality={80}
                    style={{ objectFit: "cover" }}
                    src={manga.images.webp.image_url}
                    alt={manga.images.webp.image_url}
                  />
                  <div className="flex flex-col justify-between">
                    <div className="flex flex-col gap-2">
                      <p>Title : {manga.title}</p>
                      <p>Type : {manga.type}</p>
                      <p>Published : {manga.published.string}</p>
                      <p>Chapter : {manga.chapters ?? "-"}</p>
                      <p>Genre : {parseData(manga.genres)}</p>
                      <p>Volume : {manga.volumes ?? "-"}</p>
                    </div>
                    <p className="line-clamp-1">
                      Author :{" "}
                      {manga.authors.map((author, index) => {
                        return <span key={index}>{author.name}</span>;
                      })}
                    </p>
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
