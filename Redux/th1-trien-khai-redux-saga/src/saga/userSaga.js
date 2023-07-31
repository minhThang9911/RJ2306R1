import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
	AC_FETCH_USER,
	AC_FETCH_USER_SUCCESS,
	AC_LOGIN,
	AC_LOGIN_SUCCESS,
} from "../redux/userSlice";
const BaseURL = "https://jsonplaceholder.typicode.com/users";
function* getUser(action) {
	try {
		const res = yield axios.get(BaseURL);
		yield put({
			type: AC_FETCH_USER_SUCCESS,
			payload: res.data,
		});
	} catch (e) {
		console.log("error - getUser", e);
	}
}

function* authSagaFun(action) {
	const user = action.payload;
	if (user.username === "admin" && user.password === "letmein") {
		yield put({
			type: AC_LOGIN_SUCCESS,
			payload: user,
		});
		yield put({
			type: AC_FETCH_USER,
			payload: {},
		});
	}
}

export default function* rootSaga() {
	yield takeLatest(AC_LOGIN, authSagaFun);
	yield takeLatest(AC_FETCH_USER, getUser);
}
