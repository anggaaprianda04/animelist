import AnimeList from "@/components/Fragments/AnimeList";
import Header from "@/components/Fragments/AnimeList/Header";
import AnimeRecomended from "@/components/Fragments/AnimeRecomended";
import MangaList from "@/components/Fragments/MangaList";
import {
  getNestedAnimeResponse,
  getAnimeResponse,
  reproduce,
} from "./service/api-anime";

export default async function Page() {
  const animeTop = await getAnimeResponse("top/anime", "limit=12");
  const getManga = await getAnimeResponse("manga", "limit=6");

  let animeRecommended = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );
  animeRecommended = reproduce(animeRecommended, 16);

  return (
    <>
      <div className="absolute w-full min-h-screen -mt-4 rounded-br-2xl bg-gradient-to-b -z-0 from-color-primary"></div>
      <div className="relative px-6">
        <section className="mt-4">
          <Header title="Anime Recommendation" />
          <AnimeRecomended api={animeRecommended} />
        </section>
        <section className="mt-4 ">
          <Header title="Anime Popular" link="/popular" />
          <AnimeList api={animeTop} />
        </section>
        <section className="mt-4 mb-4 ">
          <Header title="Manga" link="/manga" />
          <MangaList api={getManga} />
        </section>
      </div>
    </>
  );
}
