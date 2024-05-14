import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <div className="flex flex-col justify-between bg-color-dark md:items-center md:p-4 md:flex-row">
      <div className="flex gap-6">
        <Link href="/" className="text-xl font-bold text-color-white">
          MYANIMELIST
        </Link>
        <Link
          href="/characters"
          className="mt-1 ml-6 text-base font-semibold text-color-accent">
          Characters
        </Link>
        <Link
          href="/news"
          className="mt-1 text-base font-semibold text-color-accent">
          News
        </Link>
      </div>
      <InputSearch />
    </div>
  );
};

export default Navbar;
