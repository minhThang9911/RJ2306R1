import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Articles from "../components/Articles";

function UserDetail() {
	const [user, setUser] = useState({});
	const { task, userId } = useParams();
	const [isEditting, setIsEditting] = useState(false);
	const navigate = useNavigate();
	useEffect(() => {
		setIsEditting(task === "edit");
		if (isEditting) {
			(async () => {
				const res = await axios
					.get(`http://localhost:3005/users/${userId}`)
					.catch((e) => {
						console.log(e.response.data);
					});
				setUser(res.data);
			})();
		} else {
			setUser({
				id: userId,
			});
		}
	}, [userId, isEditting, task]);

	const handleChange = (e) => {
		setUser((pre) => ({
			...pre,
			[e.target.name]: e.target.value,
		}));
	};
	const handleAdd = () => {
		(async () => {
			let statusCode = 404;
			let res;
			if (isEditting) {
				res = await axios.put(
					`http://localhost:3005/users/${user.id}`,
					user
				);
			} else {
				res = await axios.post(`http://localhost:3005/users`, user);
				if (res.status === 201) {
					navigate(`/user-detail/edit/${user.id}`);
				}
			}
			alert(`Status Code: ${res.status}, Status text: ${res.statusText}`);
			statusCode = res.status;
			if (statusCode === 200 || statusCode === 201) {
				alert("Thay đổi đã lưu!!");
			}
		})().catch((e) => {
			console.log(e.response.data);
		});
	};
	return (
		<div className="detail-box">
			<div className="header">
				<h1>User Detail</h1>
				<Link to="/" className="to-home-link">
					Back to Home
				</Link>
			</div>
			<div className="body">
				<input
					name="id"
					value={user.id || ""}
					onChange={handleChange}
					hidden
				/>

				<h3>Name</h3>
				<div className="row">
					<input
						name="name"
						value={user.name || ""}
						onChange={handleChange}
					/>
					<button className="btn btn-add" onClick={handleAdd}>
						{isEditting ? "Update" : "Add"}
					</button>
				</div>

				{isEditting && <Articles userId={user.id} />}
			</div>
		</div>
	);
}

export default UserDetail;
