import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";

const store = configureStore({ reducer: rootReducer });
export type TypedDispatch = typeof store.dispatch;
export default store;
