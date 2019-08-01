package com.backfront.service;

import com.backfront.model.dto.PhoneNumberDto;
import com.backfront.model.entity.PhoneNumberEntity;
import com.backfront.repository.PhoneNumberRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Phone implements I_Phone {
    @Autowired
    PhoneNumberRepo phoneRepo;

    @Override
    public PhoneNumberEntity addPhone(PhoneNumberDto phone) {
        return phoneRepo.save(new PhoneNumberEntity(phone));
    }

    @Override
    public PhoneNumberEntity updatePhone(PhoneNumberDto phone, Long id) {
        PhoneNumberEntity phoneToUpdate = new PhoneNumberEntity(phone);
        phoneToUpdate.setId(id);
        return phoneRepo.save(phoneToUpdate);
    }

    @Override
    public PhoneNumberEntity deletePhone(Long id) {
        PhoneNumberEntity phoneToDelete = phoneRepo.findById(id).get();
        phoneRepo.deleteById(id);
        return phoneToDelete;
    }

    @Override
    public PhoneNumberEntity getPhone(Long id) {
        if(!phoneRepo.existsById(id)){
            return null;
        }
        return phoneRepo.findById(id).get();
    }
}
