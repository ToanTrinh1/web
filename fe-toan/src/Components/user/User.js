import React, { useState, useEffect } from "react";
import axios from "axios";
import './User.css';
import './thungrac.png'
const Table = () => {
    const [data, setData] = useState([]);
    const [id, setId] = useState("");
    const [searchId, setSearchId] = useState("");
    useEffect(() => {
        axios
            .get("http://localhost:8080/home")
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    const deleteRow = (id) => {
        axios
            .delete(`http://localhost:8080/home/${id}`)
            .then((response) => {
                if (response.status === 200) {
                    setData(data.filter((item) => item.id !== id));
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <section>
            <h1 className="toan">Danh sách nhân sự</h1>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Họ tên</th>
                    <th>Số điện thoại</th>
                    <th>Chuyên ngành</th>
                    <th>Phòng xét nghiệm</th>
                    <th>Chức vụ</th>
                    <th>Xóa</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item) => (

                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.phoneNumber}</td>
                        <td>{item.major}</td>
                        <td>{item.laboratory}</td>
                        <td>{item.position}</td>
                        <td>
                            <button onClick={() => deleteRow(item.id)}><img src="https://www.google.com/search?q=icon+th%C3%B9ng+r%C3%A1c&sca_esv=593697585&tbm=isch&sxsrf=AM9HkKmbbT2zKp1YdGVB4e87M_6JBay46Q:1703572551690&source=lnms&sa=X&ved=2ahUKEwiDoKumvqyDAxVIklYBHU61BTMQ_AUoAXoECAEQAw&biw=1528&bih=760&dpr=1.25#imgrc=wMIqqhBrF2LsYM" alt=""/></button>
                        </td>
                    </tr>
                ))}
                </tbody>

            </table>
        </section>
    );
};

export default Table;

