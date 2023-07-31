import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import userReducer from "./userSlice";
import rootSaga from "../saga/userSaga";
import logger from "redux-logger";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
	reducer: userReducer,
	middleware: [sagaMiddleware, logger],
});
sagaMiddleware.run(rootSaga);
