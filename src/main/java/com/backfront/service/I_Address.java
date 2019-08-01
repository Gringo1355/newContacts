package com.backfront.service;

import com.backfront.model.dto.AddressDto;
import com.backfront.model.entity.AddressEntity;

public interface I_Address {
    AddressEntity addAddress(AddressDto address);
    AddressEntity updateAddress(AddressDto address, Long id);
    AddressEntity deleteAddress(Long id);
    AddressEntity getAddress(Long id);
}
