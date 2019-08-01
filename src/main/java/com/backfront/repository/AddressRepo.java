package com.backfront.repository;

import com.backfront.model.entity.AddressEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressRepo extends JpaRepository<AddressEntity, Long> {
}
