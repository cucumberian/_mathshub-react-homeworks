import React from "react";
import { useSelector } from "react-redux";
import Message from "../Message/Message";

function MessagesContainer() {
  const messages = useSelector((state) => state.messages.messages);
  console.log("messages =", messages);
  return (
    <div>
      {messages.length > 0 &&
        messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
    </div>
  );
}

export default MessagesContainer;
