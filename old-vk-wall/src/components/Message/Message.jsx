/* eslint-disable react/prop-types */
import React from "react";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import UserContext from "../../context/user-context";
import useFetchData from "../../hooks/use-fetchData";

import { BiSolidTrashAlt } from "react-icons/bi";
import "./Message.css";
import { messagesSliceActions } from "../../store/messages-slice";
import UserAvatar from "../../ui/UserAvatar";

function Message({ message }) {
  const dispatch = useDispatch();
  const userContext = useContext(UserContext);
  const date = new Date(Date.parse(message.date));
  const { error, isLoading, fetchData } = useFetchData();
  const apiUrl = useSelector((state) => state.api.apiMessages);

  const deleteMessageHandler = () => {
    const messageId = message.id;
    const userHash = userContext.user.hash;
    const payload = { id: messageId, hash: userHash };

    const fetchOption = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    };

    const jsonProcessingFunc = (json) => {
      console.log("message delete response json =", json);
      if (!json.status) {
        console.warn(json.message);
        return;
      }
      console.log();
      dispatch(messagesSliceActions.deleteMessage(json.message.id));
    };

    fetchData({ url: apiUrl, options: fetchOption, func: jsonProcessingFunc });
  };

  return (
    <div className="user_message">
      {userContext.user.id === message.user_id && (
        <BiSolidTrashAlt
          className="massage_trash"
          onClick={deleteMessageHandler}
        />
      )}
      <UserAvatar
        className="user_avatar"
        src={message.avatarUrl}
        title={`${message.user_firstname} ${message.user_lastname}`}
        alt="аватар пользователя"
      />
      <div>
        <a href="">
          {message.user_firstname} {message.user_lastname}
        </a>
        <p>{message.text}</p>
        <div className="message_actions">
          <div>
            <span className="message_date">
              {`${date.getDate()} ${date.toLocaleDateString("ru-RU", {
                month: "short",
              })} ${date.getFullYear()} ${date.toLocaleTimeString("ru-RU", {
                hour: "numeric",
                minute: "2-digit",
              })}`}
            </span>
            |<a href="">Комментировать</a>|<a href="">Тет-а-тет</a>
          </div>
          <a href="">Мне нравится</a>
        </div>
      </div>
    </div>
  );
}

export default Message;
