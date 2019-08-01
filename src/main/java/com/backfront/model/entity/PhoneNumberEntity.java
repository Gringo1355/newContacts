package com.backfront.model.entity;

import com.backfront.model.dto.PhoneNumberDto;
import com.backfront.service.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
@Entity
@Table(name="phone_numbers")
public class PhoneNumberEntity {

    public PhoneNumberEntity(PhoneNumberDto phone){
        this.phoneNumber = getPhoneNumber();
    }

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private String phoneNumber;

    @NotNull
    private LocalDateTime createdDate = LocalDateTime.now();

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "userId")
    private UserEntity userEntity;
}
