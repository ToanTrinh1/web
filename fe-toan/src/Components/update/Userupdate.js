import React, { useState, useEffect } from "react";
import axios from "axios";
import './update.css'
const UserForm = () => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [major, setMajor] = useState("");
    const [laboratory, setLaboratory] = useState("");
    const [position, setPosition] = useState("");

    const majors = [
        "Đa khoa",
        'Nhi khoa',
        'Y tá'
    ];
    const laboratoryOptions = [
        '1',
        '2',
        '3',
        '4',
        '5',
        // ... more options
    ];
    const positionOption = [
        "Truởng phòng",
        "Phó phòng",
        "Nhân viên"
        // ... more options
    ];
    useEffect(() => {
        axios.get(`http://localhost:8080/home`).then((response) => {
            if (response.status === 200) {
                const user = response.data;
                setName(user.name);
                setPhoneNumber(user.phoneNumber);
                setMajor(user.major);
                setLaboratory(user.laboratory);
                setPosition(user.position);
            }
        });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            name === "" ||
            phoneNumber === "" ||
            major === "" ||
            laboratory === "" ||
            position === ""
        ) {
            alert("Vui lòng điền đầy đủ thông tin!");
            return;
        }
        axios.put(`http://localhost:8080/home?id=${id}`, {
            name,
            phoneNumber,
            major,
            laboratory,
            position,
        })

            .then((response) => {
            if (response.status === 200) {
                alert("Sửa thông tin người dùng thành công");
            }

        });

    };
    const handleSearch = async () => {
        const response = await axios.get(`http://localhost:8080/home/${id}`);
        if (response.status === 200) {
            const user = response.data;
            if (user) { // Kiểm tra xem user có tồn tại không
                setName(user.name);
                setPhoneNumber(user.phoneNumber);
                setMajor(user.major);
                setLaboratory(user.laboratory);
                setPosition(user.position);
            } else {
                alert("Không tìm thấy người dùng với ID này!");
            }
        } else {
            alert("Không tìm thấy người dùng với ID này!");
        }
    };

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Tìm ID nhân viên muốn sửa thông tin</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Nhập ID"
                            value={id}
                            onChange={(event) => setId(event.target.value)}
                        />
                        <button type="button" className="btn btn-secondary" onClick={handleSearch}>Tìm kiếm</button>
                    </div>
                    {/* ... other fields and form elements ... */}
                </form>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">ID</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Nhập ID"
                        value={id}
                        onChange={(event) => setId(event.target.value)}
                    />
                </div>
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
                    <label htmlFor="name">Số điện thoại</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Nhập số điện thoại"
                        value={phoneNumber}
                        onChange={(event) => setPhoneNumber(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="specialty">Chuyên ngành</label>
                    <select
                        id="major"
                        className="form-control"
                        value={major}
                        onChange={(e) => setMajor(e.target.value)}
                    >
                        <option value="" className="toan">Chọn chuyên ngành</option>
                        {majors.map((option) => (
                            <option key={option} value={option} className="toan">
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="lab">Phòng xét nghiệm</label>
                    <select
                        id="major"
                        className="form-control"
                        value={laboratory}
                        onChange={(e) => setLaboratory(e.target.value)}
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
                        id="major"
                        className="form-control"
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
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

export default UserForm;