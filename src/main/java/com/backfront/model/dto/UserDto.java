package com.backfront.model.dto;

import com.backfront.model.entity.UserEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
public class UserDto {

    private String fullName;
    private String email;
    //private LocalDateTime creationDate;
}
