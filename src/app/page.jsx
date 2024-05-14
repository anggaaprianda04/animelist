import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import AnimeRecomended from "@/components/AnimeRecomended";
import {
  getNestedAnimeResponse,
  getAnimeResponse,
  reproduce,
} from "./service/api-anime";

export default async function Page() {
  const animeTop = await getAnimeResponse("top/anime", "limit=8");
  let animeRecommended = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );
  animeRecommended = reproduce(animeRecommended, 16);

  return (
    <div className="px-10">
      <section className="mt-4 bg-color-secondary">
        <Header title="Anime Recommendation" />
        <AnimeRecomended api={animeRecommended} />
      </section>
      <section className="mt-4 bg-color-secondary">
        <Header title="Anime Popular" link="/popular" />
        <AnimeList api={animeTop} />
      </section>
      <section className="mt-4 mb-4 bg-color-secondary">
        <Header title="News Anime" link="/" />
        {/* <AnimeList api={animeTop} /> */}
      </section>
    </div>
  );
}
