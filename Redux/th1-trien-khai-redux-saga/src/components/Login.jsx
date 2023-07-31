import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { AC_LOGIN } from "../redux/userSlice";

function Login() {
	const [user, setUser] = useState({ username: "", password: "" });
	const userLogined = useSelector((state) => state.userLogined);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	useEffect(() => {
		if (userLogined.username) {
			navigate("/users");
		}
	}, [userLogined, navigate]);

	const setValueForUser = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};
	const login = () => {
		dispatch({
			type: AC_LOGIN,
			payload: user,
		});
	};

	return (
		<form>
			<label>User name</label>
			<input name="username" onChange={setValueForUser} type="text" />
			<label>Password</label>
			<input name="password" onChange={setValueForUser} type="password" />
			<button
				type="button"
				onClick={() => {
					login();
				}}>
				Login
			</button>
		</form>
	);
}

export default Login;
