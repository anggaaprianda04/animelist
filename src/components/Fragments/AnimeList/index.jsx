"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ animes }) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-6 sm:grid-cols-3">
        {animes?.data?.map((anime) => {
          const checkTotalEpisode = anime.episodes;
          return (
            <Link
              href={`/anime/${anime.mal_id}`}
              key={anime.mal_id}
              className="w-full shadow-2xl cursor-pointer rounded-xl bg-color-secondary text-color-white hover:shadow-color-secondary hover:transition-all hover:bg-color-secondary">
              <div className="relative">
                <Image
                  width={350}
                  height={350}
                  priority={true}
                  quality={60}
                  style={{ objectFit: "cover" }}
                  className="h-64 rounded-t-lg"
                  src={anime.images.webp.large_image_url}
                  alt="image"
                />
                {checkTotalEpisode ? (
                  <div className="absolute left-0 right-0 items-center justify-between hidden w-full px-3 py-1 mt-2 text-sm lg:flex text-color-white bg-color-primary top-56">
                    <p className="font-semibold text-color-white">
                      Total Episode : {anime.episodes}
                    </p>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-yellow-500">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                      <p className="ml-1 text-base">{anime.score}</p>
                    </div>
                  </div>
                ) : (
                  <div className="absolute left-0 right-0 w-full px-3 py-1 mt-2 text-color-white bg-color-primary top-56">
                    <span>-</span>
                  </div>
                )}
              </div>
              <div className="p-4 bg-color-secondary rounded-b-xl">
                <h3 className="text-sm font-semibold text-center truncate md:text-lg">
                  {anime.title}
                </h3>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default AnimeList;
