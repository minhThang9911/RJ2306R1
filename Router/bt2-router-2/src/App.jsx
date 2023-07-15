import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Employee from "./components/Employee";
import EmployeeDetail from "./components/EmployeeDetail";

export default function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={<Login />}
            />
            <Route
                path="/employee"
                element={<Employee />}
            />
            <Route
                path="/employee/detail"
                element={<EmployeeDetail />}
            />
        </Routes>
    );
}
