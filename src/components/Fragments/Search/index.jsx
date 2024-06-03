import Input from "@/components/Elements/Input";

const Search = ({ value, handleChange, title }) => {
  return <Input title={title} value={value} onChange={handleChange} />;
};

export default Search;
