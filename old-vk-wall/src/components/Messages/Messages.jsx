import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useCallback } from "react";
import { useMemo } from "react";

import { useDispatch } from "react-redux";
import { messagesSliceActions } from "../../store/messages-slice";

import useFetchData from "../../hooks/use-fetchData";
import DrawContext from "../../context/draw-context";
import MessagesContainer from "../MessagesContainer/MessagesContainer";
import Divider from "../../ui/Divider/Divider";

function Messages() {
  const dispatch = useDispatch();

  const { error, isLoading, fetchData } = useFetchData();
  const { apiUrl } = useContext(DrawContext);

  const url = useMemo(() => apiUrl + "/messages/", [apiUrl]);

  const dataProcessingFunc = useCallback((json) => {
    dispatch(messagesSliceActions.setMessages({ messages: json.messages }));
    console.log("response.json =", json);
  }, []);

  useEffect(() => {
    fetchData({ url, func: dataProcessingFunc });
  }, []);

  return (
    <>
      {error && !isLoading && <p>Ошибка при загрузке сообщений</p>}
      {isLoading && <p>Загрузка сообщений</p>}
      {!error && !isLoading && <MessagesContainer />}
    </>
  );
}

export default Messages;
