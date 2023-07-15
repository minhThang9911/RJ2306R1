import { useLocation, useNavigate } from "react-router-dom";

const employees = [
    {
        id: 1,
        name: "Hoa",
        age: 20,
    },
    {
        id: 2,
        name: "Khánh",
        age: 25,
    },
    {
        id: 3,
        name: "Tú",
        age: 22,
    },
];

function Employee() {
    const {
        state: { email },
    } = useLocation();
    const navigate = useNavigate();
    const handleDetail = (index) => {
        navigate("/employee/detail", { state: employees[index] });
    };
    return (
        <div>
            <h1>Welcome {email}</h1>

            <table
                border="1"
                cellPadding="0">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>
                                <button
                                    onClick={() => {
                                        handleDetail(index);
                                    }}>
                                    Detail
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Employee;
