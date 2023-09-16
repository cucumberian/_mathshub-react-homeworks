import { createSlice } from "@reduxjs/toolkit";

const initialMessagesState = { messages: [] };
const messagesSliceConfig = {
  name: "messages",
  initialState: initialMessagesState,
  reducers: {
    addMessage(state, action) {
      state.messages = [...state.messages, action.payload.message];
    },
    setMessages(state, action) {
      state.messages = action.payload.messages;
    },
    deleteMessage(state, action) {
      console.log("deleteing message with id = ", action.payload);
      state.messages = [
        ...state.messages.filter((message) => message.id !== action.payload),
      ];
    },
  },
};

const messagesSlice = createSlice(messagesSliceConfig);
const messagesSliceActions = messagesSlice.actions;

export default messagesSlice;
export { messagesSliceActions };
