import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import singlePageReducer from "../src/reducers/reducer";

const rootReducers = combineReducers({
  singlePageReducer,
});

const middlewareEnhacer = applyMiddleware(thunk);

const composeWithDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composeWithDevTools(middlewareEnhacer);

const store = configureStore(
  {
    reducer: rootReducers,
  },
  composedEnhancers
);

export default store;
