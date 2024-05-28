import AnimeList from "@/components/Fragments/AnimeList";
import Header from "@/components/Fragments/AnimeList/Header";
import AnimeRecomended from "@/components/Fragments/AnimeRecomended";
import CharacterList from "@/components/Fragments/CharacterList";
import MangaList from "@/components/Fragments/MangaList";
import React from "react";

const Index = ({ animeRecomended, animeList, mangaList, characterList }) => {
  return (
    <>
      <section className="mt-4">
        <Header title="Anime Recommendation" />
        <AnimeRecomended api={animeRecomended} />
      </section>
      <section className="mt-4 ">
        <Header title="Anime Popular" link="/popular" />
        <AnimeList api={animeList} />
      </section>
      <section className="mt-4 mb-4 ">
        <Header title="Manga" link="/manga" />
        <MangaList api={mangaList} />
      </section>
      <section className="mt-4 mb-4 ">
        <Header title="Character" link="/characters" />
        <CharacterList characters={characterList} />
      </section>
    </>
  );
};

export default Index;
