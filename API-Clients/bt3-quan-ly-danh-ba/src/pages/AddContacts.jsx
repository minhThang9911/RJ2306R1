import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function AddContacts() {
	const [contact, setContact] = useState({});

	const { task, contactId } = useParams();
	const isEditting = task === "edit";
	const navigate = useNavigate();
	useEffect(() => {
		if (isEditting) {
			(async () => {
				const res = await axios
					.get(`http://localhost:3005/contacts/${contactId}`)
					.catch((e) => {
						console.log(e);
					});
				setContact(res.data);
			})();
		} else {
			setContact({
				id: contactId + 1,
			});
		}
	}, [contactId, isEditting]);

	const encodeImgToURL = (file) => {
		const reader = new FileReader();
		return new Promise((reslove, reject) => {
			reader.onload = () => {
				reslove(reader.result);
			};
			reader.onerror = () => {
				reader.abort();
				reject("Problem parsing input file.");
			};
			reader.readAsDataURL(file);
		});
	};

	const handleAvatar = (e) => {
		const file = e.target.files[0];
		if (file) {
			(async () => {
				const img = await encodeImgToURL(file);
				setContact((pre) => ({
					...pre,
					image: img,
				}));
			})();
		}
	};

	const handleChange = (e) => {
		setContact((pre) => ({
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
					`http://localhost:3005/contacts/${contact.id}`,
					contact
				);
			} else {
				res = await axios.post(
					`http://localhost:3005/contacts`,
					contact
				);
			}
			alert(`Status Code: ${res.status}, Status text: ${res.statusText}`);
			statusCode = res.status;
			if (statusCode === 200 || statusCode === 201) {
				navigate("/", { state: contact });
			}
		})().catch((e) => {
			console.log(e.response.data);
		});
	};
	return (
		<div className="add-box">
			<h1>{isEditting ? "Edit" : "Add Contact"}</h1>
			<input
				name="id"
				value={contact.id || ""}
				onChange={handleChange}
				hidden
			/>
			<div>
				<img
					src={contact.image}
					alt={contact.name || ""}
					className="user-avartar"
				/>
				<label htmlFor="select-avartar" className="btn btn-avartar">
					Add Image
				</label>
				<input
					type="file"
					id="select-avartar"
					onChange={handleAvatar}
					hidden
				/>
			</div>
			<h3>Name</h3>
			<input
				name="name"
				value={contact.name || ""}
				onChange={handleChange}
			/>
			<h3>Email</h3>
			<input
				type="email"
				name="email"
				value={contact.email || ""}
				onChange={handleChange}
			/>
			<h3>Phone</h3>
			<input
				type="phone"
				name="phone"
				value={contact.phone || ""}
				onChange={handleChange}
			/>
			<button className="btn btn-add" onClick={handleAdd}>
				{isEditting ? "Save" : "Add"}
			</button>
		</div>
	);
}

export default AddContacts;
