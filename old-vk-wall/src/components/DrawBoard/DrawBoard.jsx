import React from "react";

import DrawContext from "../../context/draw-context";

import { uid } from "../../utils";

import useFetchData from "../../hooks/use-fetchData";

import "./DrawBoard.css";

function DrawBoard() {
  const drawContext = React.useContext(DrawContext);

  const [error, isLoading, fetchData] = useFetchData({
    url: drawContext.apiUrl,
  });

  const addDrawHandler = (e) => {
    const url = drawContext.apiUrl + "/drawings/";
    const title = Math.random().toString();
    const data = uid();

    // Функция для обработки ответа от сервера
    const processPostResponse = (data) => {
      if (data.status) {
        const drawing = data.drawing;
        drawContext.setDrawings((prevValues) => {
          const drawingsCopy = structuredClone(prevValues);
          drawingsCopy[drawing.id] = drawing;
          return drawingsCopy;
        });
      }
    };

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, data }),
    };

    fetchData({ url, options, func: processPostResponse });
  };

  return (
    <section className="draw-board">
      <p>Drawboard</p>
      <button onClick={addDrawHandler}>Отправить</button>
      {isLoading && <p>Отправка дынных</p>}
      {error && <p>Ошибка при отправке дынных</p>}
    </section>
  );
}

export default DrawBoard;
