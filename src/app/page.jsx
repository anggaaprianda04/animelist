import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse } from "./service/api-anime";

export default async function Page() {
  const animeTop = await getAnimeResponse("top/anime", "limit=8");

  return (
    <div className="p-2">
      <section>
        <Header title="Anime Popular" link="/popular" />
        <AnimeList api={animeTop} />
      </section>
    </div>
  );
}
