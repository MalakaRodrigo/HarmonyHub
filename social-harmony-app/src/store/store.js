import { configureStore } from "@reduxjs/toolkit";
import { middleware, sagaMiddleware } from './middleware';
import rootReducer from "./reducers";
import rootSaga from './sagas';

const initialState = {};
const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(...middleware),
  devTools: true,
});

sagaMiddleware.run(rootSaga);

export default store;
