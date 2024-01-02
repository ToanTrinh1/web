package com.example.quanlynhansu.Service;

import com.example.quanlynhansu.Model.User;
import com.example.quanlynhansu.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceIpm implements UserService {
    @Autowired
    private UserRepository userRepository;
    @Override
    public List<User> getALLUser() {

        return userRepository.findAll();
    }

    @Override
    public User addUser(User user) {
        if (user!=null){
            return userRepository.save(user);
        }
        return null;
    }

    @Override
    public Boolean deleteUser(int id) {
        if (id >= 1 ){
            User user= userRepository.getByid(id);
            if (user!=null){
                userRepository.delete(user);
                return true;
            }
        }
        return false;
    }

    @Override
    public User updateUser(Integer id, User user) {
        if (user != null) {
            User user1 = userRepository.getByid(id);
            if (user1 != null) {
                user1.setName(user.getName());
                user1.setPhoneNumber(user.getPhoneNumber());
                user1.setMajor(user.getMajor());
                user1.setLaboratory(user.getLaboratory());
                user1.setPosition(user.getPosition());
                return userRepository.save(user1);
            }
        }
        return null;
    }

    @Override
    public User getUser(Integer id) {
        return userRepository.getByid(id);
    }
}
