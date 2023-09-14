import React, { useContext } from "react";

import DrawContext from "../../context/draw-context";
import UserContext from "../../context/user-context";

import { uid } from "../../utils";

import useFetchData from "../../hooks/use-fetchData";

import "./DrawBoard.css";

function DrawBoard() {
  const drawContext = useContext(DrawContext);
  const userContext = useContext(UserContext);

  const [error, isLoading, fetchData] = useFetchData({
    url: drawContext.apiUrl,
  });

  const addDrawHandler = () => {
    const url = drawContext.apiUrl + "/drawings/";
    const title = Math.random().toString();
    const data = uid();
    const userHash = userContext.user.hash;
    console.log("addDraw.userHash =", userHash);

    // Функция для обработки ответа от сервера
    const processPostResponse = (data) => {
      if (data.status) {
        console.log("рисунок успешно добавлен в бд");
        const drawing = data.drawing;
        drawContext.setDrawings((prevValues) => {
          const drawingsCopy = structuredClone(prevValues);
          drawingsCopy[drawing.id] = drawing;
          return drawingsCopy;
        });
      }
    };

    // Отправляем данные рисунка вместе с хэшем пользовтеля
    const sendedData = { title, data, hash: userHash };
    console.log("addDrawHandler.sendedData =", sendedData);
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sendedData),
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
