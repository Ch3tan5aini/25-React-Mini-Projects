import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const useFetch = (url, options = {}) => {
  const [pending, setPending] = useState(false);
  const [data, setData] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  async function fetchData() {
    try {
      setPending(true);
      const response = await fetch(url);
      if (!response.ok) {
        setErrorMsg("Error Fetching Data!");
        return response.statusText;
      }
      const result = await response.json();
      setData(result);
      setPending(false);
    } catch (error) {
      setPending(false);
      setErrorMsg("Error Occured!");
      throw new Error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return [pending, data, errorMsg];
};

export default useFetch;
