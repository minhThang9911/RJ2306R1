import axios from "axios";
import { useEffect, useState } from "react";

function Articles({ userId }) {
	const [article, setArticle] = useState({});
	const [lastId, setLastId] = useState(0);
	const [articleList, setArticleList] = useState([]);
	const [isEditting, setIsEditting] = useState(false);
	useEffect(() => {
		(async () => {
			const res = await axios.get("http://localhost:3005/articles");
			const all = res.data;
			setLastId(+all[all.length - 1].id);
			setArticleList(all.filter((item) => item["user_id"] === userId));
		})().catch((e) => console.log(e.response.data));
	}, [userId]);

	const handleChange = (e) => {
		setArticle((pre) => ({ ...pre, [e.target.name]: e.target.value }));
	};
	const handleAdd = () => {
		(async () => {
			if (isEditting) {
				await axios.put(
					`http://localhost:3005/articles/${article.id}`,
					article
				);
				const tmp = [...articleList];
				tmp[tmp.findIndex((item) => item.id === article.id)] = article;
				setArticleList(tmp);
			} else {
				const tmp = {
					...article,
					id: lastId + 1,
					user_id: userId,
				};
				await axios.post("http://localhost:3005/articles", tmp);
				setArticleList((pre) => [...pre, tmp]);
				setLastId(lastId + 1);
			}

			handleCancel();
		})().catch((e) => console.log(e.response.data));
	};
	const handleCancel = () => {
		setIsEditting(false);
		setArticle({});
	};
	const handleEdit = (id) => {
		setIsEditting(true);
		setArticle(
			articleList[articleList.findIndex((item) => item.id === id)]
		);
	};
	const handleDelete = (id) => {
		(async () => {
			await axios.delete(`http://localhost:3005/articles/${id}`);
			setArticleList((pre) => pre.filter((item) => item.id !== id));
		})().catch((e) => console.log(e.response.data));
	};
	return (
		<div>
			<div className="body">
				<h2>Article</h2>
				<div className="row">
					<input
						name="title"
						value={article.title || ""}
						onChange={handleChange}
					/>
					<button className="btn btn-add" onClick={handleAdd}>
						{isEditting ? "Update" : "Add"}
					</button>
					{isEditting && (
						<button
							className="btn btn-cancel"
							onClick={handleCancel}>
							Cancel
						</button>
					)}
				</div>
			</div>
			{articleList.length !== 0 && (
				<table>
					<thead>
						<tr>
							<th> Article </th>
							<th> Actions </th>
						</tr>
					</thead>
					<tbody>
						{articleList.map((article) => (
							<tr key={article.id}>
								<td>{article.title}</td>
								<td>
									<button
										className="btn btn-edit"
										onClick={() => handleEdit(article.id)}>
										Edit
									</button>
									<button
										className="btn btn-delete"
										onClick={() =>
											handleDelete(article.id)
										}>
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</div>
	);
}

export default Articles;
