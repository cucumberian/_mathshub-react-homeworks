import { configureStore } from "@reduxjs/toolkit";

import messagesSlice from "./messages-slice.js";
import apiSlice from "./api-slice.js";

const store = configureStore({
  reducer: { messages: messagesSlice.reducer, api: apiSlice.reducer },
});

export default store;
