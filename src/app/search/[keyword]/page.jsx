import { getAnimeResponse } from "@/app/service/api-anime";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

export default async function Page({ params }) {
  const { keyword } = params;
  const decodeUri = decodeURI(keyword);

  const searchAnime = await getAnimeResponse("anime", `q=${decodeUri}`);

  return (
    <div className="p-2">
      <section>
        <Header title={`Hasil pencarian ${decodeUri}....`} />
        <AnimeList api={searchAnime} />
      </section>
    </div>
  );
}
