import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import User from "./components/User";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/users" element={<User />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
