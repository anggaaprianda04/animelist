import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <div className="flex flex-col justify-between bg-color-dark md:items-center md:p-4 md:flex-row">
      <div className="flex gap-6 text-color-white">
        <Link href="/" className="text-xl font-bold">
          MYANIMELIST
        </Link>
        <Link href="/characters" className="text-lg font-medium">
          Characters
        </Link>
        <Link href="/magazines" className="text-lg font-medium">
          Magazines
        </Link>
      </div>
      <InputSearch />
    </div>
  );
};

export default Navbar;
