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
        {searchAnime.data.length === 0 ? (
          <div className="flex items-center justify-center max-w-xl min-h-screen mx-auto">
            <h3 className="text-2xl font-bold mb-36 text-color-white">
              List anime not found...
            </h3>
          </div>
        ) : (
          <AnimeList api={searchAnime} />
        )}
      </section>
    </div>
  );
}
