import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
export default function BookList() {
	const [bookList, setBookList] = useState([]);
	const navigate = useNavigate();
	const { state: book } = useLocation();
	useEffect(() => {
		(async () => {
			const res = await axios.get("http://localhost:3005/books");
			const books = [...res.data];
			if (book) {
				const index = books.findIndex((item) => item.id === book.id);
				if (index === -1) {
					books.push(book);
				} else {
					books[index] = book;
				}
			}
			setBookList(books);
		})();
	}, [book]);
	const handleNewBook = () => {
		navigate("/newbook", {
			state: {
				id: +bookList.length + 1,
			},
		});
	};
	const handleEdit = (id) => {
		navigate("/newbook", {
			state: bookList.find((item) => item.id === id),
		});
	};
	const handleDelete = (id) => {
		(async () => {
			const res = await axios.delete(`http://localhost:3005/books/${id}`);
			console.log(res);
			if (res.status === 200) {
				setBookList(bookList.filter((book) => book.id !== id));
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
				<h2>Library</h2>
				<button className="btn btn-new" onClick={handleNewBook}>
					Add a new book
				</button>
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
