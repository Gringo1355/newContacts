package com.backfront.service;

import com.backfront.model.dto.UserDto;
import com.backfront.model.entity.UserEntity;
import com.backfront.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class User implements I_User {
    @Autowired
    UserRepo userRepo;

    @Override
    public UserEntity addUser(UserDto user) {
       return userRepo.save(new UserEntity(user));
    }

    @Override
    public UserEntity updateUser(UserDto user, Long id) {
        UserEntity userToUpdate = new UserEntity(user);
        userToUpdate.setId(id);
        return userRepo.save(userToUpdate);
    }

    @Override
    public UserEntity deleteUser(Long id) {
        UserEntity userToDelete = userRepo.findById(id).get();
        userRepo.deleteById(id);
        return userToDelete;
    }

    @Override
    public List<UserEntity> getUsers() {
        return userRepo.findAll();
    }

    @Override
    public UserEntity getUser(Long id) {
        if(!userRepo.existsById(id)){
            return null;
        }
        return userRepo.findById(id).get();
    }
}
