import React, { Component } from "react";
import "./App.css";

class App extends Component {
    state = {
        studentList: [
            {
                name: "aaaaa",
                phone: "213",
                email: "rwrwe",
            },
            {
                name: "bbb",
                phone: "3131",
                email: "fsdfds",
            },
            {
                name: "ccc",
                phone: "2141",
                email: "dsada",
            },
        ],
        form: {
            name: "",
            phone: "",
            email: "",
        },
        isValid: false,
        indexSelected: -1,
    };
    handleChange = (event) => {
        this.setState(
            (state) => {
                const form = state.form;
                form[event.target.name] = event.target.value;
                return { form };
            },
            () => this.checkInvalidForm()
        );
    };
    handleSelect = (studentSelected, index) => {
        this.setState({
            form: JSON.parse(JSON.stringify(studentSelected)),
            indexSelected: index,
        });
    };
    checkInvalidForm = () => {
        const { name, phone, email } = this.state.form;
        const value = name && phone && email;
        this.setState({
            isValid: value,
        });
    };
    handleSubmit = () => {
        if (this.state.isValid) {
            const studentList = this.state.studentList;
            if (this.state.indexSelected > -1) {
                studentList.splice(
                    this.state.indexSelected,
                    1,
                    this.state.form
                );
            } else {
                studentList.push(this.state.form);
            }
            this.setState({
                studentList,
                form: {
                    name: "",
                    phone: "",
                    email: "",
                },
                isValid: false,
                indexSelected: -1,
            });
        }
    };
    handleDelete = (index) => {
        const studentList = this.state.studentList;
        studentList.splice(index, 1);
        this.setState({ studentList });
    };

    render() {
        const { studentList, form } = this.state;
        return (
            <div>
                <h1>Student List</h1>
                <div>
                    <label>Name: </label>
                    <input
                        name="name"
                        value={form.name}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <label>Phone: </label>
                    <input
                        type="number"
                        name="phone"
                        value={form.phone}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <label>Email: </label>
                    <input
                        name="email"
                        value={form.email}
                        onChange={this.handleChange}
                    />
                </div>
                <button onClick={this.handleSubmit}>Submit</button>
                <table>
                    <thead>
                        <tr>
                            {["Name", "Phone", "Email", "Action"].map(
                                (item, index) => (
                                    <th key={index}>{item}</th>
                                )
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {studentList.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.phone}</td>
                                <td>{item.email}</td>
                                <td>
                                    <button
                                        onClick={() =>
                                            this.handleSelect(item, index)
                                        }>
                                        Edit
                                    </button>
                                    <button
                                        onClick={() =>
                                            this.handleDelete(index)
                                        }>
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
}

export default App;
