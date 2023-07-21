import { Route, Routes } from "react-router-dom";

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="/home" element={<Home />} />
		</Routes>
	);
}
