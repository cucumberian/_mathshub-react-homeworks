import { createStore } from "redux";
const initialState = { posts: {} };

const uid = () =>
  String(Date.now().toString(32) + Math.random().toString(16)).replace(
    /\./g,
    ""
  );

const postReducer = (state = initialState, action) => {
  // console.log("postReducer");
  // console.log("state =", state);
  console.log("posts =", state.posts);
  // console.log("payload =", action.payload);

  if (action.type === "add") {
    const id = uid();
    const post = { ...action.payload, id };
    const stateCopy = structuredClone(state);
    stateCopy.posts[id] = post;
    return stateCopy;
  }
  return state;
};

const store = createStore(postReducer);

const postActions = store.action;

export default store;

export { postActions };
