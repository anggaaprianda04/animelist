"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import CardRecomended from "./CardRecomended";
import Link from "next/link";

const AnimeRecomended = ({ api }) => {
  return (
    <>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        autoplay={{ delay: 2000 }}
        pagination={{ clickable: true }}
        style={{
          "--swiper-pagination-top": "252px",
          "--swiper-pagination-color": "#FFBA08",
          "--swiper-pagination-bullet-inactive-color": "#999999",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "8px",
          "--swiper-pagination-bullet-horizontal-gap": "2px",
          "--swiper-pagination-bullet-padding": "12px",
        }}>
        {api.data?.map((detailAnime, index) => {
          return (
            <>
              <SwiperSlide key={index}>
                <Link href={`/anime/${detailAnime.mal_id}`} key={index}>
                  <CardRecomended key={index} anime={detailAnime} />
                </Link>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </>
  );
};

export default AnimeRecomended;
