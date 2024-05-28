import AnimeList from "@/components/Fragments/AnimeList";
import Header from "@/components/Fragments/AnimeList/Header";
import AnimeRecomended from "@/components/Fragments/AnimeRecomended";
import CharacterList from "@/components/Fragments/CharacterList";
import MangaList from "@/components/Fragments/MangaList";
import { reproduce } from "@/utils";
import { getAnimeResponse } from "./service/api-anime";

const Page = async () => {
  const animeTop = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=12`
  )
    .then((res) => {
      return res.json();
    })
    .catch((error) => console.log(error));

  const getManga = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/manga?limit=6`
  )
    .then((res) => {
      return res.json();
    })
    .catch((error) => console.log(error));

  const getCharacter = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/characters?limit=10`
  )
    .then((res) => {
      return res.json();
    })
    .catch((error) => console.log(error));

  // let animeRecom = async () => {
  //   await fetch(
  //     `${process.env.NEXT_PUBLIC_API_BASE_URL}/recommendations/anime?entry`
  //   )
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .catch((error) => console.log(error));
  // };

  // let getAnimeRecom = await reproduce(animeRecom, 16);

  return (
    <>
      <div className="absolute w-full min-h-screen mt-0 sm:-mt-4 rounded-br-2xl bg-gradient-to-b -z-0 from-color-primary"></div>
      <div className="relative px-6">
        {/* <section className="mt-4">
          <Header title="Anime Recommendation" />
          <AnimeRecomended api={getAnimeRecom} />
        </section> */}
        <section className="mt-4 ">
          <Header title="Anime Popular" link="/popular" />
          <AnimeList api={animeTop} />
        </section>
        <section className="mt-4 mb-4 ">
          <Header title="Manga" link="/manga" />
          <MangaList api={getManga} />
        </section>
        <section className="mt-4 mb-4 ">
          <Header title="Character" link="/characters" />
          <CharacterList characters={getCharacter} />
        </section>
      </div>
    </>
  );
};

export default Page;
