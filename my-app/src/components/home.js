import React from "react";
import Axios from "axios";
import React, { useState, useEffect } from "react";
const App = () => {
    const [users, setUsers] = useState([]);
    const [id, setId] = useState("");

    const deleteUser = () => {
        Axios.delete(`/api/users/${id}`).then((response) => {
            if (response.status === 200) {
                setUsers(users.filter((user) => user.id !== id));
            }
        });
    };

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Tên</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
                            <button onClick={deleteUser}>Xóa</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};