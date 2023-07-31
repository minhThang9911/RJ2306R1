import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { actions } from "../redux/userSlice";

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [user, setUser] = useState({ username: "", password: "" });
    const userLogined = useSelector((state) => state.userLogined);
    const setValueForUser = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };
    const login = () => {
        dispatch({
            type: actions.LOGIN,
            payload: user,
        });
    };
    console.log(actions);
    useEffect(() => {
        if (userLogined.username) {
            navigate("/users");
        }
    }, [userLogined, navigate]);
    return (
        <form>
            <label>User name</label>
            <input
                id="username"
                onChange={setValueForUser}
                type="text"
            />
            <label>Password</label>
            <input
                id="password"
                onChange={setValueForUser}
                type="password"
            />
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
