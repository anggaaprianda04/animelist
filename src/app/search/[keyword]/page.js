import AnimeList from '@/components/AnimeList';
import Header from '@/components/AnimeList/Header';

export default async function Page({params}) {
    const { keyword } = params;
    const response = await fetch(`${process.env.NEXT_API_URL_PUBLIC_BASE}/anime?q=${keyword}`);
    const searchAnime = await response.json();

    return (
        <div className="p-2">
            <section>
                <Header title={`Hasil pencarian ${keyword}....`} />
                <AnimeList api={searchAnime} />
            </section>
        </div>
    )
}
