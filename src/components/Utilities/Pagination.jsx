import Button from "./Button";

const Pagination = ({ lastPage, page, setPage, currentPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handleNextPage = () => {
    setPage(() => page + 1);
    scrollTop();
  };

  const handlePrevPage = () => {
    setPage(() => page - 1);
    scrollTop();
  };

  console.log("ini", currentPage);

  return (
    <div className="flex items-center justify-center gap-4 text-2xl">
      {/* <button onClick={handlePrevPage}>Prev</button> */}
      <Button
        title={"Prev"}
        disabled={currentPage == 1 ? true : false}
        onClick={handlePrevPage}
      />
      <p>
        {page} of {lastPage}
      </p>
      <Button
        title={"Next"}
        disabled={currentPage == lastPage ? true : false}
        onClick={handleNextPage}
      />
      {/* <button onClick={handleNextPage}>Next</button> */}
    </div>
  );
};

export default Pagination;
