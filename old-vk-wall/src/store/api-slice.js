import { createSlice } from "@reduxjs/toolkit";

const apiVersion = "v0.1";
const host = "http://127.0.0.1";
const port = 8000;
const apiUrl = `${host}:${port}/api/${apiVersion}`;

const apiInitialState = {
  api: apiUrl,
  apiMessages: apiUrl + "/messages/",
};

const apiSliceConfig = {
  name: "api",
  initialState: apiInitialState,
};

const apiSlice = createSlice(apiSliceConfig);

export default apiSlice;
