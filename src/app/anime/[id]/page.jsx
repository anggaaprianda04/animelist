import { getAnimeResponse } from "@/app/service/api-anime";
import CardInformation from "@/components/Elements/CardInformation";
import Video from "@/components/Elements/Video";
import { parseData } from "@/utils";
import Image from "next/image";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);

  return (
    <div className="p-4 bg-opacity-20 bg-gradient-to-b -z-30 from-color-primary">
      <div className="grid grid-cols-1 gap-8 px-2 lg:grid-cols-2 text-color-white">
        <div className="flex flex-col text-sm md:text-lg">
          <div>
            <div className="mb-4">
              <h1 className="text-2xl text-color-white">
                {anime.data.title}{" "}
                <span> {`(${anime.data.title_japanese})`}</span>
              </h1>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
              <div className="flex flex-col mb-4 overflow-y-auto justify-items-start">
                <CardInformation
                  title="Total Episode"
                  detail={anime.data.episodes}
                />
                <CardInformation title="Year" detail={anime.data.year} />
                <CardInformation title="Score" detail={anime.data.score} />
                <CardInformation
                  title="Favorite"
                  detail={anime.data.favorites}
                />
                <CardInformation title="Member" detail={anime.data.members} />
                <CardInformation title="Rank" detail={anime.data.rank} />
                <CardInformation
                  title="Duration"
                  detail={anime.data.duration}
                />
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
                className="object-cover rounded-md shadow-lg sm w-60 h-60 sm:w-56 sm:h-72"
              />
            </div>
          </div>
          <div className="mt-4 mb-3 sm:mt-0">
            <p className="mb-4 text-2xl">Synopsis :</p>
            <p className="text-justify indent-8">{anime.data.synopsis}</p>
          </div>
          <div className="mb-3">
            <h3 className="text-2xl">Information :</h3>
            <p className="text-justify">
              {anime.data.background ?? "Information anime not ready"}
            </p>
          </div>
          <div className="mb-3">
            <h3 className="text-2xl">Start :</h3>
            <p className="text-justify">{anime.data.aired.string}</p>
          </div>
          <div className="mb-3">
            <h3 className="text-2xl">Season :</h3>
            <p className="text-justify">
              {anime.data?.season?.toUpperCase() ?? "Season is not ready"}
            </p>
          </div>
          <div className="mb-3">
            <h3 className="text-2xl">Genre :</h3>
            <p className="text-justify">{parseData(anime.data?.genres)}</p>
          </div>
        </div>
        <div className="flex flex-col">
          <Video youtube_id={anime.data.trailer.youtube_id} />
          <div className="mt-4">
            <h3 className="text-2xl text-color-white">Producers :</h3>
            <div className="flex flex-col overflow-y-auto">
              {anime.data?.producers.map((producer) => {
                return (
                  <div
                    key={producer.mal_id}
                    className="mt-2 mr-2 font-semibold text-color-white">
                    <p>{producer.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
