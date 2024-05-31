"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import CardRecomended from "./CardRecomended";
import Link from "next/link";

const AnimeRecomended = ({ animeRecom }) => {
  return (
    <>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={10}
        autoplay={{ delay: 2000 }}
        pagination={{ clickable: true }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        style={{
          "--swiper-pagination-top": "260px",
          "--swiper-pagination-color": "#FFBA08",
          "--swiper-pagination-bullet-inactive-color": "#999999",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "8px",
          "--swiper-pagination-bullet-horizontal-gap": "2px",
          "--swiper-pagination-bullet-padding": "12px",
        }}>
        {animeRecom.data?.map((detailAnime, index) => {
          if (
            detailAnime.mal_id == 57501 ||
            detailAnime.mal_id == 57662 ||
            detailAnime.mal_id == 39800 ||
            detailAnime.mal_id == 50710 ||
            detailAnime.mal_id == 37281
          )
            return;
          return (
            <SwiperSlide key={index}>
              <Link href={`/anime/${detailAnime.mal_id}`}>
                <CardRecomended anime={detailAnime} />
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default AnimeRecomended;
