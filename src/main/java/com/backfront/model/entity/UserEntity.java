package com.backfront.model.entity;

import com.backfront.model.dto.UserDto;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
@Builder
@Entity
@Table(name="users")
public class UserEntity {

    public UserEntity(UserDto user){
        this.fullname = user.getFullName();
        this.email = user.getEmail();
    }

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private String fullname;

    @NotNull
    private String email;

    @NotNull
    private LocalDateTime createdDate = LocalDateTime.now();
}
