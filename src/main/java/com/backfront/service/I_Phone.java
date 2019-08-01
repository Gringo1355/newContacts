package com.backfront.service;

import com.backfront.model.dto.PhoneNumberDto;
import com.backfront.model.entity.PhoneNumberEntity;


public interface I_Phone {
    PhoneNumberEntity addPhone(PhoneNumberDto phone);
    PhoneNumberEntity updatePhone(PhoneNumberDto phone, Long id);
    PhoneNumberEntity deletePhone(Long id);
    PhoneNumberEntity getPhone(Long id);
}
