package com.backfront.controller;

import com.backfront.model.dto.AddressDto;
import com.backfront.model.entity.AddressEntity;
import com.backfront.service.I_Address;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class AddressController {

    @Autowired
    I_Address addressService;

    @PostMapping(value = "/addAddress")
    public AddressEntity addAddress(@RequestBody AddressDto address){
        return addressService.addAddress(address);
    }

    @PutMapping(value = "/udateAddress/{id}")
    public AddressEntity updateAddress(@RequestBody AddressDto address, Long id){
        return addressService.updateAddress(address, id);
    }

    @DeleteMapping(value= "/deleteAddress/{id}")
    public AddressEntity deleteAddress(@PathVariable("id") Long id){
        return addressService.deleteAddress(id);
    }

    @GetMapping(value = "/getAddress/{id}")
    public AddressEntity getAddress(@PathVariable("id") Long id){
        return  addressService.getAddress(id);
    }

}
