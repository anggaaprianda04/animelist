import Image from "next/image";
import { IoIosStar } from "react-icons/io";

const CardCharacter = ({ character, index }) => {
  return (
    <div
      key={index}
      className="p-3 transition-colors rounded-md bg-color-white hover:bg-color-dark hover:duration-75 hover:text-color-white">
      <div className="flex justify-between gap-2">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col">
            <p className="text-xl font-semibold">{character.name}</p>
            <p>{character.name_kanji}</p>
          </div>
          <div className="flex gap-3">
            <p>Favorit</p>
            <div className="flex gap-1">
              <p className="font-medium">{character.favorites}</p>
              <IoIosStar size={21} className="text-color-accent" />
            </div>
          </div>
        </div>
        <Image
          className="object-cover rounded-md w-44 h-44"
          width={100}
          height={100}
          src={character.images.webp.image_url}
          alt={character.images.webp.image_url}
        />
      </div>
    </div>
  );
};

export default CardCharacter;
