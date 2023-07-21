import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function NewBook() {
	const [book, setBook] = useState({
		id: 0,
		title: "",
		quantity: "",
	});
	const [isEditting, setIsEditting] = useState(false);
	const { state: edditedBook } = useLocation();
	const navigate = useNavigate();
	useEffect(() => {
		if (edditedBook.title) {
			setBook(edditedBook);
			setIsEditting(true);
		} else {
			setBook({
				id: +edditedBook.id + 1,
			});
		}
	}, [edditedBook]);

	const handleChange = (e) => {
		setBook((pre) => ({
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
					`http://localhost:3005/books/${book.id}`,
					book
				);
			} else {
				res = await axios.post(`http://localhost:3005/books`, book);
			}
			console.log(res);
			alert(`Status Code: ${res.status}, Status text: ${res.statusText}`);
			statusCode = res.status;
			if (statusCode === 200 || statusCode === 201) {
				navigate("/", { state: book });
			}
		})().catch((e) => {
			console.log(e.response.data);
		});
	};
	return (
		<div className="add-box">
			<h1>{isEditting ? "Edit" : "Add a new book"}</h1>
			<input name="id" value={book.id} onChange={handleChange} hidden />
			<h3>Title</h3>
			<input
				name="title"
				value={book.title || ""}
				onChange={handleChange}
			/>
			<h3>Quantity</h3>
			<input
				name="quantity"
				value={book.quantity || ""}
				onChange={handleChange}
			/>
			<button className="btn btn-add" onClick={handleAdd}>
				{isEditting ? "Save" : "Add"}
			</button>
		</div>
	);
}
