package com.group11.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.group11.modal.Address;

public interface AddressRepository extends JpaRepository<Address, Long> {

}
