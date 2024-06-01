import Button from "./Button";

const Pagination = ({ lastPage, page, setPage, currentPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handleFirstPage = () => {
    setPage(() => (page = 1));
    scrollTop();
  };

  const handleLastPage = () => {
    setPage(() => lastPage);
    scrollTop();
  };

  const handleNextPage = () => {
    setPage(() => page + 1);
    scrollTop();
  };

  const handlePrevPage = () => {
    setPage(() => page - 1);
    scrollTop();
  };

  // console.log("ini", currentPage);

  return (
    <div className="flex items-center justify-center gap-4 mt-10 text-2xl text-color-white">
      <div className="flex flex-col gap-2 sm:flex-row">
        {page <= 1 ? null : (
          <Button title={"First"} onClick={handleFirstPage} />
        )}
        {page <= 1 ? null : <Button title={"Prev"} onClick={handlePrevPage} />}
      </div>
      <p>
        {page} of {lastPage}
      </p>
      <div className="flex flex-col gap-2 sm:flex-row">
        {page >= lastPage ? null : (
          <Button title={"Next"} onClick={handleNextPage} />
        )}
        {page >= lastPage ? null : (
          <Button title={"Last"} onClick={handleLastPage} />
        )}
      </div>
    </div>
  );
};

export default Pagination;
