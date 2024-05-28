"use client";

import {
  getAnimeResponse,
  getNestedAnimeResponse,
} from "@/app/service/api-anime";
import CardSkeleton from "@/components/Elements/CardSkeleton";
import AnimeList from "@/components/Fragments/AnimeList";
import Header from "@/components/Fragments/AnimeList/Header";
import AnimeRecomended from "@/components/Fragments/AnimeRecomended";
import CharacterList from "@/components/Fragments/CharacterList";
import MangaList from "@/components/Fragments/MangaList";
import { reproduce } from "@/utils";
import React, { useEffect, useState } from "react";

const Index = () => {
  const [loading, setLoading] = useState(false);
  const [getAnimeTop, setGetAnimeTop] = useState({});
  const [getManga, setGetManga] = useState({});
  const [getCharacter, setGetCharacter] = useState({});
  //   const animeTop = await getAnimeResponse("top/anime", "limit=12");
  //   const getManga = await getAnimeResponse("manga", "limit=6");
  //   const getCharacter = await getAnimeResponse("characters", "limit=10");
  const handleGetAnime = async () => {
    setLoading(true);
    const animeTop = await getAnimeResponse("top/anime", "limit=12").then(
      (res) => {
        setGetAnimeTop(res);
        setLoading(false);
      }
    );
    return animeTop;
  };

  //   let animeRecommended = await getNestedAnimeResponse(
  //     "recommendations/anime",
  //     "entry"
  //   );
  //   animeRecommended = reproduce(animeRecommended, 16);

  useEffect(() => {
    return () => {
      handleGetAnime();
    };
  }, []);

  console.log("ambil", getAnimeTop);

  return (
    <>
      <section className="mt-4">
        <Header title="Anime Recommendation" />
        {/* <AnimeRecomended api={animeRecomended} /> */}
      </section>
      <section className="mt-4 ">
        <Header title="Anime Popular" link="/popular" />
        {loading ? <CardSkeleton /> : <AnimeList animePopular={getAnimeTop} />}
      </section>
      <section className="mt-4 mb-4 ">
        <Header title="Manga" link="/manga" />
        {/* <MangaList api={mangaList} /> */}
      </section>
      <section className="mt-4 mb-4 ">
        <Header title="Character" link="/characters" />
        {/* <CharacterList characters={characterList} /> */}
      </section>
    </>
  );
};

export default Index;
