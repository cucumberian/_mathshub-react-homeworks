import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { messagesSliceActions } from "../../store/messages-slice";
import useFetchData from "../../hooks/use-fetchData";
import UserContext from "../../context/user-context";
import "./MessageForm.css";
import VKButton from "../../ui/VKButton/VKButton";
import VKButtonTransparent from "../../ui/VKButton/VKButtonTransparent";

function MessageForm() {
  const [textAreaText, setTextAreaText] = useState("");
  const userContext = useContext(UserContext);

  const dispatch = useDispatch();

  const apiUrl = useSelector((state) => state.api.apiMessages);

  const { error, isLoading, fetchData } = useFetchData();

  const textAreaChangeHandler = (e) => {
    setTextAreaText(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (textAreaText.length === 0) {
      console.warn("Пустое сообщение не отправляется");
      return;
    }
    const payload = {
      text: textAreaText,
      hash: userContext.user.hash,
    };

    const fetchOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    };
    console.log("userContext =", userContext);
    console.log("payload =", payload);

    const jsonProcessingFunc = (json) => {
      console.log("addMessageHandler. response json =", json);
      if (json.status) {
        dispatch(messagesSliceActions.addMessage({ message: json.message }));
      }
    };

    fetchData({ url: apiUrl, options: fetchOptions, func: jsonProcessingFunc });
  };

  return (
    <section className="message-form">
      <form action="" onSubmit={submitHandler}>
        <div className="send_message">
          <textarea
            rows="4"
            onChange={textAreaChangeHandler}
            placeholder="Введите ваше сообщение"
          />
        </div>
        <div className="send_message-buttons_panel">
          {/* <button type="submit">Отправить</button> */}
          <VKButton type="submit">Отправить в палату</VKButton>

          <VKButtonTransparent type="button">Прикрепить</VKButtonTransparent>
        </div>
      </form>

      {isLoading && <p>Отправка данных</p>}
      {error && <p>Ошибка при отправке данных</p>}
    </section>
  );
}
export default MessageForm;
