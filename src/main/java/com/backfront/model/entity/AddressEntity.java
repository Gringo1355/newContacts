package com.backfront.model.entity;

import com.backfront.model.dto.AddressDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
@Entity
@Table(name="addresses")
public class AddressEntity {

    public AddressEntity(AddressDto address){
        this.country = address.getCountry();
        this.city = address.getCity();
        this.street = address.getStreet();
        this.houseNumber = address.getHouseNumber();
        this.apartment = address.getApartment();
    }

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private String country;

    @NotNull
    private String city;

    @NotNull
    private String street;

    @NotNull
    private String houseNumber;

    @NotNull
    private String apartment;

    @NotNull
    private LocalDateTime createDate = LocalDateTime.now();

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "userId")
    UserEntity userEntity;
}
