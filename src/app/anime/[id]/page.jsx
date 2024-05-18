import { getAnimeResponse } from "@/app/service/api-anime";
import CardInformation from "@/components/Utilities/CardInformation";
import Video from "@/components/Utilities/Video";
import { parseData } from "@/constant";
import Image from "next/image";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  return (
    <div className="p-4 bg-color-secondary">
      <div className="grid grid-cols-2 gap-8 mx-auto text-color-white">
        <div className="flex flex-col">
          <div className="mb-3">
            <p className="mb-4 text-2xl">Synopsis :</p>
            <p className="text-lg text-justify indent-8">
              {anime.data.synopsis}
            </p>
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
          <div className="mb-3">
            <h3 className="text-2xl">Genre :</h3>
            <p className="text-lg text-justify">
              {parseData(anime.data?.genres)}
            </p>
          </div>
        </div>
        <div>
          <div className="mb-4">
            <h1 className="text-2xl text-color-white">
              {anime.data.title}{" "}
              <span> {`(${anime.data.title_japanese})`}</span>
            </h1>
          </div>
          <div className="flex gap-2 ">
            <div className="flex flex-col mb-4 overflow-y-auto justify-items-start">
              <CardInformation
                title="Total Episode"
                detail={anime.data.episodes}
              />
              <CardInformation title="Year" detail={anime.data.year} />
              <CardInformation title="Score" detail={anime.data.score} />
              <CardInformation title="Favorite" detail={anime.data.favorites} />
              <CardInformation title="Member" detail={anime.data.members} />
              <CardInformation title="Rank" detail={anime.data.rank} />
              <CardInformation title="Duration" detail={anime.data.duration} />
              <CardInformation title="Type" detail={anime.data.type} />
              <CardInformation title="Source" detail={anime.data.source} />
              <CardInformation
                title="Studios"
                detail={anime.data.studios[0].name}
              />
              <CardInformation title="Status" detail={anime.data.status} />
            </div>
            <Image
              width={100}
              height={100}
              priority={true}
              quality={100}
              src={anime.data.images.webp.large_image_url}
              alt={anime.data.images.webp.large_image_url}
              className="rounded-md shadow-lg w-80 max-h-fit "
            />
          </div>
        </div>
      </div>
      <Video youtubeId={anime.data.trailer.youtube_id} />
      <div className="mt-6">
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
