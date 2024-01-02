import React, { useState } from "react";
import axios from "axios";
import './Admin.css'
const EmployeeForm = () => {
    const [name, setName] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");
    const [major, setmajor] = useState("");
    const [laboratory, setLaboratory] = useState("");
    const [position, setPosition] = useState("");

    const laboratoryOptions = [
        '1',
        '2',
        '3',
        '4',
        '5',
        // ... more options
    ];
    const majorOptions = [
        "Đa khoa",
        'Nhi khoa',
        'Y tá',
        // ... more options
    ];
    const positionOption = [
        "Truởng phòng",
        "Phó phòng",
        "Nhân viên"
        // ... more options
    ];
    const onSubmit = async (event) => {
        event.preventDefault();

        const data = {
            name,
            phoneNumber,
            major,
            laboratory,
            position,
        };
        if (
            name === "" ||
            phoneNumber === "" ||
            major === "" ||
            laboratory === "" ||
            position === ""
        ) {
            alert("Vui lòng điền đầy đủ các trường thông tin!");
            return;
        }

        await axios.post("http://localhost:8080/home/add", data);

        setName("");
        setphoneNumber("");
        setmajor("");
        setPosition("");
        setLaboratory("")
    };

    return (
        <div className="container">
            <h1 className="toan">Thêm Nhân Viên</h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Tên</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Nhập tên"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone_number">Số điện thoại</label>
                    <input
                        type="text"
                        className="form-control"
                        id="phoneNumber"
                        placeholder="Nhập số điện thoại"
                        value={phoneNumber}
                        onChange={(event) => setphoneNumber(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="specialty">Chuyên ngành</label>
                    <select
                        className="form-control"
                        id="lab"
                        value={major}
                        onChange={(event) => setmajor(event.target.value)}
                    >
                        <option value="" className="toan">Chọn chuyên ngành</option>
                        {majorOptions.map((option) => (
                            <option key={option} value={option} className="toan">
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="lab">Phòng xét nghiệm</label>
                    <select
                        className="form-control"
                        id="lab"
                        value={laboratory}
                        onChange={(event) => setLaboratory(event.target.value)}
                    >
                        <option value="" className="toan">Chọn phòng xét nghiệm</option>
                        {laboratoryOptions.map((option) => (
                            <option key={option} value={option} className="toan">
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="position">Chức vụ</label>
                    <select
                        className="form-control"
                        id="lab"
                        value={position}
                        onChange={(event) => setPosition(event.target.value)}
                    >
                        <option value="" className="toan">Chọn chức vụ</option>
                        {positionOption.map((option) => (
                            <option key={option} value={option} className="toan">
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Lưu</button>
            </form>
        </div>
    );
};

export default EmployeeForm;