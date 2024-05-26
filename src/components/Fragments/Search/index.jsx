import Input from "@/components/Elements/Input";

const Search = ({ searchRef, handleChange, title }) => {
  return (
    <div className="flex justify-end mt-4 mr-2">
      <Input title={title} searchRef={searchRef} onChange={handleChange} />
    </div>
  );
};

export default Search;
