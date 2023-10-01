package com.group11.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.group11.modal.User;

public interface UserRepository extends JpaRepository<User, Long> {

	public User findByEmail(String email);

}
