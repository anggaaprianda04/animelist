import CardNavbar from "./CardNavbar";

const Navbar = () => {
  return (
    <div className="flex flex-col justify-between bg-color-primary sm:items-center sm:p-4 sm:flex-row">
      <div className="flex justify-between gap-2 mt-2 sm:mt-0 sm:justify-start ">
        <CardNavbar link="/" title="Home" />
        <CardNavbar link="/characters" title="Characters" />
        <CardNavbar link="/magazines" title="Magazines" />
      </div>
      <h1 className="ml-2 text-3xl font-bold tracking-widest text-color-white tex">
        MYANIMELIST
      </h1>
    </div>
  );
};

export default Navbar;
