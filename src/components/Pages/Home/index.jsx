import Header from "@/components/Fragments/AnimeList/Header";
import React from "react";
import ListAnime from "./listAnime";
import ListAnimeRecom from "./listAnimeRecom";

const Index = () => {
  return (
    <>
      <section className="mt-4">
        <Header title="Anime Recommendation" />
        <ListAnimeRecom />
      </section>
      <section className="mt-4 ">
        <Header title="Anime" link="/animes" />
        <ListAnime />
      </section>
    </>
  );
};

export default Index;
