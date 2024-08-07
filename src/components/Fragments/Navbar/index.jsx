import CardNavbar from "./CardNavbar";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-color-primary sm:items-center sm:p-4 sm:flex-row">
      <div className="flex flex-col justify-start gap-2 mt-2 mb-3 ml-4 sm:mb-0 sm:ml-0 sm:flex-row sm:mt-0 ">
        <CardNavbar link="/" title="Home" />
        <CardNavbar link="/manga" title="Manga" />
        <CardNavbar link="/characters" title="Characters" />
        <CardNavbar link="/magazines" title="Magazines" />
      </div>
      <h1 className="hidden ml-2 text-3xl font-bold tracking-widest sm:inline-flex text-color-white tex">
        MYANIMELIST
      </h1>
    </div>
  );
};

export default Navbar;
