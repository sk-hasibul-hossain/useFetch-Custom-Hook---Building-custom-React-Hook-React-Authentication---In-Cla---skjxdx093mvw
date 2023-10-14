//write your code here
import { useState, useEffect } from "react";
async function getAPIData(URL) {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}
function useFetch(URL) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    getAPIData(URL)
      .then((responseData) => {
        setData(responseData);
      })
      .catch((e) => {
        setData([]);
        setError(e);
      });
    setLoading(false);
  }, [URL]);
  return { data, loading, error };
}
export default useFetch;
