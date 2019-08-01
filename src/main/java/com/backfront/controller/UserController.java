package com.backfront.controller;

import com.backfront.model.dto.UserDto;
import com.backfront.model.entity.UserEntity;
import com.backfront.service.I_User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    I_User userService;

    @PostMapping(value = "/addUser")
    public UserEntity addUser(@RequestBody UserDto user){

        return userService.addUser(user);
    }

    @PutMapping(value = "/updateUser/{id}")
    public UserEntity updateUser(@RequestBody UserDto user, @PathVariable("id") Long id){
        return userService.updateUser(user, id);
    }

    @DeleteMapping(value = "/deleteUser/{id}")
    public UserEntity deleteUser(@PathVariable("id") Long id){
        return userService.deleteUser(id);
    }

    @GetMapping(value = "/getAllUsers")
    public List<UserEntity> getAllUsers(){
        return userService.getUsers();
    }

    @GetMapping(value = "/getUser/{id}")
    public UserEntity getUser(@PathVariable("id") Long id){
        return userService.getUser(id);
    }
}
