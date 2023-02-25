import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { legacy_createStore } from "redux";

//SELECTOR
const APPLE_LOGO = "APPLE_LOGO";
const GOOGLE_LOGO = "GOOGLE_LOGO";
const SUBSCRIBE = "SUBSCRIBE";

// ACTIONS
export const appleAction = () => ({ type: APPLE_LOGO });
export const googleAction = () => ({ type: GOOGLE_LOGO });
export const subscribeAction = () => ({ type: SUBSCRIBE });

//write a variable for State
const initialValue = {
  img:
    "https://www.shutterstock.com/image-vector/no-sign-isolated-on-white-260nw-323390270.jpg",
  isSubscribed: false
};

// REDUCERS
const techReducer = (state = initialValue, action) => {
  switch (action.type) {
    case SUBSCRIBE:
      return {
        img:
          "https://www.shutterstock.com/image-vector/no-sign-isolated-on-white-260nw-323390270.jpg",
        isSubscribed: !state.isSubscribed
      };
    case APPLE_LOGO:
      return {
        ...state,
        img:
          "https://images.pexels.com/photos/1647978/pexels-photo-1647978.jpeg?auto=compress&cs=tinysrgb&w=280&h=280&dpr=1"
      };
    case GOOGLE_LOGO:
      return {
        ...state,
        img:
          "https://images.pexels.com/photos/5417844/pexels-photo-5417844.jpeg?auto=compress&cs=tinysrgb&w=280&h=280&dpr=1"
      };
    default:
      return {
        ...state
      };
  }
};
//STORE
let store = legacy_createStore(techReducer);
/* 
//once we created store we can dispatch whereEver we want. 
store.subscribe(() => { console.log(store.getState()); });

//DISPATCH
store.dispatch(appleAction());
store.dispatch(googleAction());
*/
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
