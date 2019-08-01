package com.backfront.service;

import com.backfront.model.dto.AddressDto;
import com.backfront.model.entity.AddressEntity;
import com.backfront.repository.AddressRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Address implements I_Address {
    @Autowired
    AddressRepo addressRepo;

    @Override
    public AddressEntity addAddress(AddressDto address) {
        return addressRepo.save(new AddressEntity(address));
    }

    @Override
    public AddressEntity updateAddress(AddressDto address, Long id) {
        AddressEntity addressToUpdate = new AddressEntity(address);
        addressToUpdate.setId(id);
        return addressRepo.save(addressToUpdate);
    }

    @Override
    public AddressEntity deleteAddress(Long id) {
        AddressEntity addressToDelete = addressRepo.findById(id).get();
        addressRepo.deleteById(id);
        return addressToDelete;
    }

    @Override
    public AddressEntity getAddress(Long id) {
        if(!addressRepo.existsById(id)){
            return null;
        }
        return addressRepo.findById(id).get();
    }
}
