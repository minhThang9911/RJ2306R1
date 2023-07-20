import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function App() {
	const [task, setTask] = useState("");
	const [taskList, setTaskList] = useState([]);

	useEffect(() => {
		(async () => {
			const res = await axios.get(
				"https://jsonplaceholder.typicode.com/todos"
			);
			setTaskList(res.data);
		})();
	}, []);

	const handleChange = (e) => {
		setTask(e.target.value);
	};
	const handleSubmit = () => {
		(async () => {
			const res = await axios.post(
				"https://jsonplaceholder.typicode.com/todos",
				{
					id: taskList.length,
					title: task,
				}
			);
			if (res.status === 201) {
				setTaskList((prev) => [...prev, res.data]);
			}

			console.log(res);
		})();
	};
	return (
		<div>
			<h2>Todo List</h2>
			<p>
				<input name="task" onChange={handleChange} value={task} />
			</p>
			<p>
				<button onClick={handleSubmit}>Submit</button>
			</p>
			<ul>
				{taskList.map((task, index) => (
					<li key={index}>{task.title}</li>
				))}
			</ul>
		</div>
	);
}
