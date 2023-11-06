import CardAnimeList from "@/components/CardAnimeList";
import TitleSectionAnime from "@/components/TitleSectionAnime";

export default async function Home(){
    const response = await fetch(`${process.env.NEXT_API_URL_PUBLIC_BASE}/top/anime?limit=8`)
    const anime = await response.json();
    return (
        <div className="p-2">
            <TitleSectionAnime title="Anime Populer" link="/" />
            <div className="grid grid-cols-2 gap-4 mt-2 lg:grid-cols-4 md:grid-cols-3">
                { anime.data.map((item) => {
                    return (
                        <div key={item.mal_id} className="shadow-xl">
                            <CardAnimeList 
                                id={item.mal_id} 
                                title={item.title} 
                                urlImg={item.images.jpg.image_url} 
                                episode={item.episodes}
                                score={item.score}   
                                genres={item.genres} 
                                />
                        </div>
                    ) 
                }) }
            </div>
        </div>
    )
}