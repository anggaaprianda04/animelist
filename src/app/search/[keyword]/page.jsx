import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

export default async function Page({ params }) {
  const { keyword } = params;

  const decodeUri = decodeURI(keyword);

  const response = await fetch(
    `${process.env.NEXT_API_URL_PUBLIC_BASE}/anime?q=${decodeUri}`
  );
  const searchAnime = await response.json();

  return (
    <div className="p-2">
      <section>
        <Header title={`Hasil pencarian ${decodeUri}....`} />
        <AnimeList api={searchAnime} />
      </section>
    </div>
  );
}
