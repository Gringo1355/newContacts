package com.backfront.service;

import com.backfront.model.dto.UserDto;
import com.backfront.model.entity.UserEntity;

import java.util.List;

public interface I_User {
    UserEntity addUser(UserDto user);
    UserEntity updateUser(UserDto user, Long id);
    UserEntity deleteUser(Long id);
    List<UserEntity> getUsers();
    UserEntity getUser(Long id);
}
