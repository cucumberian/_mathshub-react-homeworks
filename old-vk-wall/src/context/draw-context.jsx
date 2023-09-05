/* eslint-disable react/prop-types */
import React from "react";

const DrawContext = React.createContext({});

function DrawContextProvider({ children }) {
  const [drawings, setDrawings] = React.useState([]);

  const apiVersion = "0.1";
  const [apiUrl, setApiUrl] = React.useState(
    `http://localhost:8000/api/v${apiVersion}`
  );

  // const addDrawHandler = React.useCallback(
  //   async (drawData) => {
  //     console.log("addDrawHandler.drawData =", drawData);
  //     // await uploadDrawing(drawData);

  //     const response = await fetch(`${apiUrl}/drawings/`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(drawData),
  //     });

  //     console.log("uploadDrawing.response =", response);

  //     const json = await response.json();
  //     setDrawings((prev) => [...prev, json.drawing]);

  //     console.log("uploadDrawing.json =", json);
  //   },
  //   [apiUrl]
  // );

  const deleteDrawHandler = React.useCallback(
    async (id) => {
      console.log(`attempt to delete drawing with id=${id}`);
      const response = await fetch(`${apiUrl}/drawings/${id}/`, {
        method: "DELETE",
      });
      const json = await response.json();
      if (json.status) {
        setDrawings((prev) => prev.filter((d) => d.id !== id));
      }
      console.log("deleteHandler.json =", json);
    },
    [apiUrl]
  );

  // const getDrawings = React.useCallback(async () => {
  //   const url = apiUrl + "/drawings/";

  //   try {
  //     const response = await fetch(url);
  //     if (!response.ok) {
  //       throw new Error(`Ошибка получения данных с сервера ${apiUrl}`);
  //     }
  //     const json = await response.json();
  //     setDrawings(json["drawings"]);
  //   } catch (err) {
  //     console.log(
  //       `Не удалось получить ответ от сервера ${apiUrl}: `,
  //       err.message
  //     );
  //     throw err;
  //   }
  // }, [apiUrl]);

  return (
    <DrawContext.Provider
      value={{
        drawings,
        setDrawings,
        // addDrawHandler,
        deleteDrawHandler,
        // getDrawings,
        apiUrl,
      }}
    >
      {children}
    </DrawContext.Provider>
  );
}

export default DrawContext;
export { DrawContextProvider };
