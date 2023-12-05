import { getAnimeResponse } from "@/app/service/api-anime";
import CardInformation from "@/components/Utilities/CardInformation";
import Video from "@/components/Utilities/Video";
import Image from "next/image";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  console.log("response", anime.data);
  return (
    <div className="px-2 py-2">
      <div className="mb-4">
        <h1 className="text-2xl text-color-white">{anime.data.title}</h1>
      </div>
      <div className="flex flex-col mb-4 overflow-y-auto justify-items-start">
        <CardInformation title={"Total Episode"} detail={anime.data.episodes} />
        <CardInformation title={"Year"} detail={anime.data.year} />
        <CardInformation title={"Score"} detail={anime.data.score} />
        <CardInformation title={"Favorite"} detail={anime.data.favorites} />
        <CardInformation title={"Member"} detail={anime.data.members} />
        <CardInformation title={"Rank"} detail={anime.data.rank} />
        <CardInformation title={"Duration"} detail={anime.data.duration} />
        <CardInformation
          title={"Studios"}
          detail={anime.data.studios[0].name}
        />
      </div>
      <div className="flex flex-col gap-4 mx-auto lg:flex-row text-color-white">
        <Image
          width={900}
          height={700}
          style={{ objectFit: "cover" }}
          src={anime.data.images.webp.image_url}
          alt={anime.data.images.jpg.image_url}
          className="w-full rounded shadow-2xl shadow-color-white"
        />
        <div className="flex flex-col">
          <div className="mb-3">
            <h3 className="text-2xl">Synopsis :</h3>
            <p className="text-lg text-justify">{anime.data.synopsis}</p>
          </div>
          <div className="mb-3">
            <h3 className="text-2xl">Information :</h3>
            <p className="text-lg text-justify">
              {anime.data.background ?? "Information anime not ready"}
            </p>
          </div>
          <div className="mb-3">
            <h3 className="text-2xl">Start :</h3>
            <p className="text-lg text-justify">{anime.data.aired.string}</p>
          </div>
          <div className="mb-3">
            <h3 className="text-2xl">Season :</h3>
            <p className="text-lg text-justify">
              {anime.data?.season?.toUpperCase() ?? "Season is not ready"}
            </p>
          </div>
        </div>
      </div>
      <Video youtubeId={anime.data.trailer.youtube_id} />
      <div className="mt-6">
        <h3 className="text-2xl text-color-white">Genres :</h3>
        <div className="flex overflow-y-auto">
          {anime.data?.genres.map((genre) => {
            return (
              <div
                key={genre.mal_id}
                className="px-2 py-1 mt-2 mr-2 font-semibold border-2 rounded-lg border-color-white text-color-white">
                <p>{genre.name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-2">
        <h3 className="text-2xl text-color-white">Producers :</h3>
        <div className="flex overflow-y-auto">
          {anime.data?.producers.map((producer) => {
            return (
              <div
                key={producer.mal_id}
                className="px-2 py-1 mt-2 mr-2 font-semibold border-2 rounded-lg border-color-white text-color-white">
                <p>{producer.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Page;
