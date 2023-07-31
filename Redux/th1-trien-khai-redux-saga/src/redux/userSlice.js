import { createSlice } from "@reduxjs/toolkit";
export const AC_LOGIN = "LOGIN";
export const AC_LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const AC_FETCH_USER = "FETCH_USER";
export const AC_FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";

const initialState = {
	users: [],
	userLogined: {},
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducer: {
		[AC_LOGIN]: (state, action) => {
			state.userLogined = action.payload;
		},
		[AC_FETCH_USER_SUCCESS]: (state, action) => {
			state.users = action.payload;
		},
	},
});
export default userSlice.reducer;
