import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
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
  animeRecommended = reproduce(animeRecommended, 8);

  return (
    <div className="p-2">
      <section>
        <Header title="Anime Popular" link="/popular" />
        <AnimeList api={animeTop} />
      </section>
      <section className="mt-4">
        <Header title="Recommendation" />
        <AnimeList api={animeRecommended} />
      </section>
    </div>
  );
}
