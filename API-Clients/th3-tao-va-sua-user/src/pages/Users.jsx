import { useState, useEffect } from "react";
import axios from "axios";
function Users() {
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
    const handleCreate = () => {
        window.location.href = "/user/add";
    };
    return (
        <div>
            <h1>Users</h1>
            {users.map((user) => (
                <div key={user.id}>
                    <a href={`/user/${user.id}`}> {user.name} </a>
                </div>
            ))}
            <button
                type="button"
                onClick={handleCreate}>
                Create
            </button>
        </div>
    );
}

export default Users;
