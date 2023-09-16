import React from "react";
import { useSelector } from "react-redux";
import Message from "../Message/Message";
import Divider from "../../ui/Divider/Divider";

function MessagesContainer() {
  const messages = useSelector((state) => state.messages.messages);
  return (
    <div>
      <Divider />
      {messages.length > 0 &&
        messages.map((message) => (
          <>
            <Message key={message.id} message={message} />
            <Divider key={`hr_${message.id}`} />
          </>
        ))}
    </div>
  );
}

export default MessagesContainer;
