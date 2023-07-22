import { Route, Routes } from "react-router-dom";
import UserList from "./pages/UserList";
import UserDetail from "./pages/UserDetail";
export default function App() {
	return (
		<Routes>
			<Route path="/" element={<UserList />} />
			<Route path="/user-detail/:task/:userId" element={<UserDetail />} />
		</Routes>
	);
}
