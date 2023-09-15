import React from "react";

const useFetchData = () => {
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const fetchData = async ({ url, options = {}, func = () => {} }) => {
    setError(null);
    try {
      setIsLoading(true);
      const response = await fetch(url, options);
      const json = await response.json();
      func(json);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { error, isLoading, fetchData };
};

export default useFetchData;
