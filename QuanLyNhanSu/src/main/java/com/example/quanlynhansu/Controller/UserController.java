package com.example.quanlynhansu.Controller;

import com.example.quanlynhansu.Model.User;
import com.example.quanlynhansu.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000/")
@RequestMapping("/home")
public class UserController {
    @Autowired
    public UserService userService;
    @GetMapping("")
    public List<User> getAllUser(){
        return userService.getALLUser();
    }
    @PostMapping("/add")
    public User addUser(@RequestBody User user){
        return userService.addUser(user);
    }
    @DeleteMapping("/{id}")
    public boolean deleteUser(@PathVariable("id") Integer id){
        return userService.deleteUser(id);
    }
    @PutMapping("")
    public User updateUser(@RequestParam("id") Integer id, @RequestBody User user){
        return userService.updateUser(id , user);
    }
    @GetMapping("/{id}")
    public User getUser(@PathVariable("id") Integer id){
        return userService.getUser(id);
    }
}
