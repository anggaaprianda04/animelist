"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import CardRecomended from "./CardRecomended";
import Link from "next/link";
import CardSkeleton from "../Utilities/CardSkeleton";

const AnimeRecomended = ({ api }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    return () => {
      api, setLoading(false);
    };
  }, []);

  return (
    <>
      {loading ? (
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
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
              slidesPerView: 4,
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
          {api.data?.map((detailAnime, index) => {
            return (
              <SwiperSlide key={index}>
                <Link href={`/anime/${detailAnime.mal_id}`}>
                  <CardRecomended anime={detailAnime} />
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <CardSkeleton />
      )}
    </>
  );
};

export default AnimeRecomended;
