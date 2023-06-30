import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const StudentInfoComponent = ({ studentList }) => (
    <table border={1}>
        <thead>
            <tr>
                <th> Id </th>
                <th> Name </th>
                <th> Age </th>
                <th> Address </th>
            </tr>
        </thead>
        <tbody>
            {studentList.map((item) => (
                <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.address}</td>
                </tr>
            ))}
        </tbody>
    </table>
);

const students = [
    {
        id: 1,
        name: "Nguyen Van A",
        age: 22,
        address: "Ha Noi",
    },
    {
        id: 2,
        name: "Nguyen Van B",
        age: 21,
        address: "Ho Chi Minh",
    },
    {
        id: 3,
        name: "Nguyen Van C",
        age: 19,
        address: "Hue",
    },
    {
        id: 4,
        name: "Nguyen Van D",
        age: 25,
        address: "Kien Giang",
    },
    {
        id: 5,
        name: "Nguyen Van E",
        age: 27,
        address: "Quang Ninh",
    },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<StudentInfoComponent studentList={students} />);
