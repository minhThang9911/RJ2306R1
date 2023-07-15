import { useState } from "react";
import { useNavigate } from "react-router-dom";

const defaultLogin = {
    email: "admin@gmail.com",
    password: "letmein",
};

function Login() {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate();
    const handleLogin = () => {
        if (JSON.stringify(user) === JSON.stringify(defaultLogin)) {
            alert("Login successful!!!");
            navigate("/employee", { state: user });
        } else {
            alert("Not found user!!!");
            setUser({
                email: "",
                password: "",
            });
        }
    };
    const handleChange = (e) => {
        setUser((pre) => ({
            ...pre,
            [e.target.name]: e.target.value,
        }));
    };
    return (
        <div>
            <input
                name="email"
                type="email"
                onChange={handleChange}
                value={user.email}
                placeholder="email"
            />
            <input
                name="password"
                type="password"
                onChange={handleChange}
                value={user.password}
                placeholder="password"
            />
            <input
                type="button"
                value="Login"
                onClick={handleLogin}
            />
        </div>
    );
}

export default Login;
