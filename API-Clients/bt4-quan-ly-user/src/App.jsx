import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";

export default function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={<Login />}
            />
            <Route
                path="/home"
                element={<Home />}
            />
        </Routes>
    );
}
