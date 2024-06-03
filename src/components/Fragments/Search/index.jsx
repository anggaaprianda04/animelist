import Input from "@/components/Elements/Input";

const Search = ({ searchRef, handleChange, title }) => {
  return (
    <div className="w-full ml-2">
      <Input title={title} searchRef={searchRef} onChange={handleChange} />
    </div>
  );
};

export default Search;
