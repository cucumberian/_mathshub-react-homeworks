import { createStore } from "redux";
const initialState = { posts: {} };

const uid = () =>
  String(Date.now().toString(32) + Math.random().toString(16)).replace(
    /\./g,
    ""
  );

const postReducer = (state = initialState, { action, post }) => {
  if (action === "add") {
    const id = uid();
    const postData = { ...post, id };
    return { ...state, postData };
  }
  return state;
};

const store = createStore(postReducer);

export default store;
