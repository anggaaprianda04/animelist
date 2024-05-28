import AnimeList from "@/components/Fragments/AnimeList";
import Header from "@/components/Fragments/AnimeList/Header";
import AnimeRecomended from "@/components/Fragments/AnimeRecomended";
import CharacterList from "@/components/Fragments/CharacterList";
import Home from "@/components/Pages/Home";
import MangaList from "@/components/Fragments/MangaList";
import { reproduce } from "@/utils";
import { getNestedAnimeResponse, getAnimeResponse } from "./service/api-anime";

const Page = async () => {
  const animeTop = await getAnimeResponse("top/anime", "limit=12");
  const getManga = await getAnimeResponse("manga", "limit=6");
  const getCharacter = await getAnimeResponse("characters", "limit=10");

  let animeRecommended = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );
  animeRecommended = reproduce(animeRecommended, 16);

  return (
    <>
      <div className="absolute w-full min-h-screen mt-0 sm:-mt-4 rounded-br-2xl bg-gradient-to-b -z-0 from-color-primary"></div>
      <div className="relative px-6">
        <Home
          animeRecomended={animeRecommended}
          animeList={animeTop}
          mangaList={getManga}
          characterList={getCharacter}
        />
      </div>
    </>
  );
};

export default Page;
