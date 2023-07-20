import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        (async function () {
            try {
                const userList = await axios.get(
                    "http://localhost:3001/api/users"
                );
                setUsers(userList.data);
            } catch (e) {
                console.log(e);
            }
        })();
    }, []);
    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}> {user.name} </li>
                ))}
            </ul>
        </div>
    );
}
