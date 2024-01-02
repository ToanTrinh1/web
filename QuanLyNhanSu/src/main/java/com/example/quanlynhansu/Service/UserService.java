package com.example.quanlynhansu.Service;

import com.example.quanlynhansu.Model.User;

import java.util.List;

public interface UserService {
    // Lấy ra tất cả thông tin nhân viên
    public List<User> getALLUser();
    // thêm nhân viên
    public User addUser(User user);
    // xóa nhân viên
    public Boolean deleteUser(int id);
    // chỉnh sửa thông tin nhân viên
    public User updateUser(Integer id , User user);
    // tìm kiếm một nhân viên
    public User getUser(Integer id);
}
