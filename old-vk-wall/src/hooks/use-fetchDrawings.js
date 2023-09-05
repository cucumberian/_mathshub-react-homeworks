import React from "react";

const useFetchDrawings = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const sendRequest = React.useCallback(async (url, func) => {
    setIsLoading(true);
    setError(false);

    try {
      // console.log("url =", url);
      const response = await fetch(url);

      // console.log("response =", response);
      if (!response.ok) {
        throw new Error(`Не удалось получить данные от ${url}`);
      }
      const json = await response.json();
      console.log("response.json =", json);
      setError(false);
      func(json);
    } catch (err) {
      setError(err.message || `Ошибка при обработке данных от ${url}`);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { sendRequest, isLoading, error };
};

export default useFetchDrawings;
