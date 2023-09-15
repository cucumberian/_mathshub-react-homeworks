import React, { useState, useContext } from "react";

import DrawContext from "../../context/draw-context";
import UserContext from "../../context/user-context";

import { uid } from "../../utils";

import useFetchData from "../../hooks/use-fetchData";

import { useDispatch } from "react-redux";
import { messagesSliceActions } from "../../store/messages-slice";

import "./DrawBoard.css";

function DrawBoard() {
  const drawContext = useContext(DrawContext);
  const userContext = useContext(UserContext);

  const [textAreaText, setTextAreaText] = useState("");

  const { error, isLoading, fetchData } = useFetchData({
    url: drawContext.apiUrl,
  });

  const dispatch = useDispatch();

  const textAreaChangeHandler = (e) => {
    setTextAreaText(e.target.value);
  };

  // отправка сообщения в апи
  const addMessageHandler = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (textAreaText.length === 0) {
      return;
    }

    const message = {
      text: textAreaText,
      date: new Date(),
      username: `${userContext.user.firstname} ${userContext.user.lastname}`,
      avatarUrl: userContext.user.avatarUrl,
    };

    const fetchUrl = drawContext.apiUrl + "/messages/";
    const fetchOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(message),
    };
    const response = await fetch(fetchUrl, fetchOptions);
    const json = await response.json();

    console.log("addMessageHandler. response json =", json);
    if (json.status) {
      dispatch(messagesSliceActions.addMessage({ message: json.message }));
    }
  };

  return (
    <section className="draw-board">
      <form action="" onSubmit={addMessageHandler}>
        <div className="send_message_div">
          <textarea
            onChange={textAreaChangeHandler}
            placeholder="Введите Ваше сообщение..."
          ></textarea>
        </div>
        <div className="send_message-buttons_panel">
          <button type="submit">Отправить</button>
          <div>
            <span>смайлик</span>
          </div>
          <button type="button">Прикрепить</button>
        </div>
      </form>

      {isLoading && <p>Отправка дынных</p>}
      {error && <p>Ошибка при отправке дынных</p>}
    </section>
  );
}

export default DrawBoard;
