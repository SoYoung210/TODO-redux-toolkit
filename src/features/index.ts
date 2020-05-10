import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { todoReducer, TODO } from "./todos/todoSlice";

const rootReducer = combineReducers({
  [TODO]: todoReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  devTools: true
})

export type RootState = ReturnType<typeof rootReducer>
