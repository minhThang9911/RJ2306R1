import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function Contacts() {
	const [contactList, setContactList] = useState([]);
	const navigate = useNavigate();
	const { state: contact } = useLocation();
	useEffect(() => {
		(async () => {
			const res = await axios.get("http://localhost:3005/contacts");
			const contacts = [...res.data];
			if (contact) {
				const index = contacts.findIndex(
					(item) => item.id === contact.id
				);
				if (index === -1) {
					contacts.push(contact);
				} else {
					contacts[index] = contact;
				}
			}
			setContactList(contacts);
		})();
	}, [contact]);
	const handleNewContact = () => {
		navigate(`/addcontact/new/${contactList.length + 1}`);
	};
	const handleEdit = (id) => {
		navigate(`/addcontact/edit/${id}`);
	};
	const handleDelete = (id) => {
		(async () => {
			const res = await axios.delete(
				`http://localhost:3005/contacts/${id}`
			);
			console.log(res);
			if (res.status === 200) {
				setContactList(
					contactList.filter((contact) => contact.id !== id)
				);
				alert(
					`Status Code: ${res.status}, Status text: ${res.statusText} Delete success!!`
				);
			}
		})().catch((e) => {
			console.log(e);
		});
	};
	return (
		<div>
			<div className="header">
				<h2>Contacts</h2>
				<button className="btn btn-new" onClick={handleNewContact}>
					Add Contact
				</button>
			</div>
			<table>
				<thead>
					<tr>
						<th colSpan={2}> Name </th>
						<th> Email </th>
						<th> Phone </th>
						<th> Actions </th>
					</tr>
				</thead>
				<tbody>
					{contactList.map((contact) => (
						<tr key={contact.id}>
							<td className="td-avartart">
								<img
									src={contact.image}
									alt={contact.name}
									className="user-avartar"
								/>
							</td>
							<td>{contact.name}</td>
							<td>{contact.email}</td>
							<td>{contact.phone}</td>
							<td>
								<button
									className="btn btn-edit"
									onClick={() => handleEdit(contact.id)}>
									Edit
								</button>
								<button
									className="btn btn-delete"
									onClick={() => handleDelete(contact.id)}>
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

export default Contacts;
