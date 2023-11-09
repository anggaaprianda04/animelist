import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

export default async function Home() {
    const response = await fetch(`${process.env.NEXT_API_URL_PUBLIC_BASE}/top/anime?limit=8`)
    const animeTop = await response.json();

    return (
        <div className="p-2">
            <section>
                <Header title="Anime Populer" link="/populer" />
                <AnimeList api={animeTop} />
            </section>
        </div>
    )
}