import InputSearch from "../Utilities/InputSearch";
import CardNavbar from "./CardNavbar";

const Navbar = () => {
  return (
    <div className="flex flex-col justify-between bg-color-primary md:items-center md:p-4 md:flex-row">
      <div className="flex gap-2 ">
        <CardNavbar link="/" title="MYANIMELIST" />
        <CardNavbar link="/characters" title="Characters" />
        <CardNavbar link="/magazines" title="Magazines" />
      </div>
      <InputSearch />
    </div>
  );
};

export default Navbar;
