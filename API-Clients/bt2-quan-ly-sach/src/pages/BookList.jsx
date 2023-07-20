import "./BookList.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function BookList() {
	const [bookList, setBookList] = useState([]);
	useEffect(() => {
		(async () => {
			const res = await axios.get(
				"https://my-json-server.typicode.com/codegym-vn/mock-api-books/books"
			);
			setBookList(res.data);
		})();
	}, []);
	const handleEdit = (id) => {};
	const handleDelete = (id) => {};
	return (
		<div>
			<div className="header">
				<h2>Library</h2>
				<Link className="btn btn-new" to="/newbook">
					Add a new book
				</Link>
			</div>
			<table>
				<thead>
					<tr>
						<th> Title </th>
						<th> Quantity </th>
						<th> Actions </th>
					</tr>
				</thead>
				<tbody>
					{bookList.map((book) => (
						<tr key={book.id}>
							<td>{book.title}</td>
							<td>{book.quantity}</td>
							<td>
								<button
									className="btn btn-edit"
									onClick={() => handleEdit(book.id)}>
									Edit
								</button>
								<button
									className="btn btn-delete"
									onClick={() => handleDelete(book.id)}>
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
