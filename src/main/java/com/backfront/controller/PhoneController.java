package com.backfront.controller;

import com.backfront.model.dto.PhoneNumberDto;
import com.backfront.model.entity.PhoneNumberEntity;
import com.backfront.service.I_Phone;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class PhoneController {
    @Autowired
    I_Phone phoneService;

    @PostMapping(value = "/addPhone")
    public PhoneNumberEntity addPhone(@RequestBody PhoneNumberDto phone){
        return phoneService.addPhone(phone);
    }

    @DeleteMapping(value = "/deletePhone/{id}")
    public PhoneNumberEntity deletePhone(Long id){
        return phoneService.deletePhone(id);
    }

    @PutMapping(value = "/updatePhone/{id}")
    public PhoneNumberEntity updatePhone(@RequestBody PhoneNumberDto phone, Long id){
        return phoneService.updatePhone(phone, id);
    }

    @GetMapping(value = "/getPhone/{id}")
    public PhoneNumberEntity getPhone(@PathVariable("id") Long id){
        return phoneService.getPhone(id);
    }
}
