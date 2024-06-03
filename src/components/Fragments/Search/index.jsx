import Input from "@/components/Elements/Input";

const Search = ({ value, handleChange, title }) => {
  return (
    <div className="w-full">
      <Input title={title} value={value} onChange={handleChange} />
    </div>
  );
};

export default Search;
