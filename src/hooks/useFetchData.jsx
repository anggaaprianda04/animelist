import { getAnimeResponse } from "@/app/service/api-anime";

const { useState, useEffect } = require("react");

const useFetchData = (dataUrl, query) => {
  const [data, setData] = useState({});
  const [fetchError, setFetchError] = useState(null);
  const [isloading, setLoading] = useState(false);

  const fetchData = async (url, params) => {
    setLoading(true);
    await getAnimeResponse(url, params)
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        setFetchError(err);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData(dataUrl, query);
  }, [dataUrl, query]);

  return { data, fetchError, isloading };
};

export default useFetchData;
