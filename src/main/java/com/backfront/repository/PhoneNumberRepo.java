package com.backfront.repository;

import com.backfront.model.entity.PhoneNumberEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PhoneNumberRepo extends JpaRepository<PhoneNumberEntity, Long> {
}
