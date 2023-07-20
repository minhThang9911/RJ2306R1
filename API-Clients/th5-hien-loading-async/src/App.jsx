import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
	const [users, setUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const getUsers = async () => {
		await new Promise((resolve) => {
			setTimeout(resolve, 3000);
		});
		return await axios.get("http://localhost:3001/api/users");
	};

	useEffect(() => {
		setIsLoading(true);
		(async () => {
			const res = await getUsers();
			setUsers(res.data);
			setIsLoading(false);
		})();
	}, []);
	return isLoading ? (
		<p>loading...</p>
	) : (
		<div>
			<h1>Users</h1>
			<ul>
				{users.map((user) => (
					<li key={user.id}> {user.name} </li>
				))}
			</ul>
		</div>
	);
}
