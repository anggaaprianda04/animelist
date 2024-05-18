"use client";

import Image from "next/image";
import React from "react";

const CardRecomended = ({ anime }) => {
  //   console.log("kala", anime);
  return (
    <div className="w-auto rounded-md shadow-lg shadow-color-dark bg-color-dark">
      <div className="flex flex-col p-1 mb-4">
        <Image
          className="h-56 rounded-md"
          width={400}
          height={200}
          priority={true}
          quality={80}
          style={{ objectFit: "cover" }}
          alt={anime.images.webp.large_image_url}
          src={anime.images.webp.large_image_url}
        />
        <p className="pt-2 ml-4 font-extrabold text-color-white line-clamp-1">{`Anime : ${anime.title}`}</p>
      </div>
    </div>
  );
};

export default CardRecomended;
