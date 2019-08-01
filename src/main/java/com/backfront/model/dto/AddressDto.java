package com.backfront.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
public class AddressDto {
    private String country;
    private String city;
    private String street;
    private String houseNumber;
    private String apartment;
    private LocalDateTime createDate;
}
