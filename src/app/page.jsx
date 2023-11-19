import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

export default async function Page() {
  const response = await fetch(`${process.env.baseUrl}/top/anime?limit=8`);
  const animeTop = await response.json();

  return (
    <div className="p-2">
      <section>
        <Header title="Anime Populer" link="/populer" />
        <AnimeList api={animeTop} />
      </section>
    </div>
  );
}
