import "./App.css";
import { Formik } from "formik";
import { useState } from "react";

function App() {
    const [form, setForm] = useState({
        title: "",
        number: "",
        selected: -1,
    });
    const [books, setBooks] = useState([]);
    const handleChange = (e) => {
        setForm((pre) => ({
            ...pre,
            [e.target.name]: e.target.value,
        }));
    };
    const handleSubmit = () => {
        const newBooks = [...books];
        if (form.selected === -1) {
            newBooks.push({
                title: form.title,
                number: form.number,
            });
        } else {
            newBooks[form.selected] = {
                title: form.title,
                number: form.number,
            };
        }
        setBooks(newBooks);
        setForm({
            title: "",
            number: "",
            selected: -1,
        });
    };
    const handleValidate = () => {
        const error = {};
        if (!form.title) error.title = "Required";
        if (!form.number) {
            error.number = "Required";
        } else if (isNaN(form.number)) {
            error.number = "Invalid Number";
        }
        return error;
    };

    const handleEdit = (index) => {
        setForm({
            ...books[index],
            selected: index,
        });
    };
    const handleDelete = (index) => {
        setBooks((prev) => prev.filter((_, i) => i !== index));
    };

    return (
        <div className="container">
            <h1>Library</h1>
            <Formik
                initialValues={form}
                onSubmit={handleSubmit}
                validate={handleValidate}>
                {({ errors, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <label
                            className={`custom-input ${
                                errors.title ? "custom-input-error" : ""
                            }`}>
                            Tiêu đề: <br />
                            <input
                                name="title"
                                onChange={handleChange}
                                value={form.title}
                            />
                            <p className="error">{errors.title}</p>
                        </label>
                        <label
                            className={`custom-input ${
                                errors.number ? "custom-input-error" : ""
                            }`}>
                            Số lượng: <br />
                            <input
                                name="number"
                                onChange={handleChange}
                                value={form.number}
                            />
                            <p className="error">{errors.number}</p>
                        </label>
                        <button type="submit">Submit</button>
                    </form>
                )}
            </Formik>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Number</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book, index) => (
                        <tr key={index}>
                            <td>{book.title}</td>
                            <td>{book.number}</td>
                            <td>
                                <button onClick={() => handleEdit(index)}>
                                    Edit
                                </button>
                                <button onClick={() => handleDelete(index)}>
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

export default App;
