import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function UserList() {
	const [userList, setUserList] = useState([]);
	const navigate = useNavigate();
	const { state: user } = useLocation();
	useEffect(() => {
		(async () => {
			const res = await axios.get("http://localhost:3005/users");
			const users = [...res.data];
			if (user) {
				const index = users.findIndex((item) => item.id === user.id);
				if (index === -1) {
					users.push(user);
				} else {
					users[index] = user;
				}
			}
			setUserList(users);
		})();
	}, [user]);
	const handleNewUser = () => {
		navigate(`/user-detail/new/${+userList[userList.length - 1].id + 1}`);
	};
	const handleEdit = (id) => {
		navigate(`/user-detail/edit/${id}`);
	};
	const handleDelete = (id) => {
		(async () => {
			const res = await axios.delete(`http://localhost:3005/users/${id}`);
			if (res.status === 200) {
				setUserList(userList.filter((user) => user.id !== id));
				alert(
					`Status Code: ${res.status}, Status text: ${res.statusText} Delete success!!`
				);
			}
		})().catch((e) => {
			console.log(e.response.data);
		});
	};
	return (
		<div>
			<div className="header">
				<h2>Users</h2>
				<button className="btn btn-new" onClick={handleNewUser}>
					Add User
				</button>
			</div>
			<table>
				<thead>
					<tr>
						<th> Name </th>
						<th> Actions </th>
					</tr>
				</thead>
				<tbody>
					{userList.map((user) => (
						<tr key={user.id}>
							<td>{user.name}</td>
							<td>
								<button
									className="btn btn-edit"
									onClick={() => handleEdit(user.id)}>
									Edit
								</button>
								<button
									className="btn btn-delete"
									onClick={() => handleDelete(user.id)}>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default UserList;
