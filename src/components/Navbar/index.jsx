import InputSearch from "../Utilities/InputSearch";
import CardNavbar from "./CardNavbar";

const Navbar = () => {
  return (
    <div className="flex flex-col justify-between bg-color-primary sm:items-center sm:p-4 sm:flex-row">
      <div className="flex justify-between gap-2 mt-2 sm:mt-0 sm:justify-start ">
        <CardNavbar link="/" title="MYANIMELIST" />
        <CardNavbar link="/characters" title="Characters" />
        <CardNavbar link="/magazines" title="Magazines" />
      </div>
      <InputSearch />
    </div>
  );
};

export default Navbar;
