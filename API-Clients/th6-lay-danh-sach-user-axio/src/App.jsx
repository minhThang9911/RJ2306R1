import React, { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		const getUsers = axios.get("http://localhost:3001/api/users");
		const getArticle = axios.get("http://localhost:3001/api/articles");
		axios
			.all([getUsers, getArticle])
			.then(
				axios.spread((res1, res2) => {
					const data = res1.data.map((user) => {
						return {
							...user,
							article: res2.data.filter((item) => {
								return item.user_id === user.id;
							}),
						};
					});
					setUsers(data);
				})
			)
			.catch((err) => {
				throw err;
			});
	}, []);
	return (
		<div>
			<h1>Users</h1>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Article numbers</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user) => (
						<tr key={user.id}>
							<td> {user.name} </td>
							<td> {user.article.length} </td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
