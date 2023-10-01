package com.group11.service;

import com.group11.exception.UserException;
import com.group11.modal.User;

public interface UserService {

	public User findUserById(Long userId) throws UserException;

	public User findUserProfileByJwt(String jwt) throws UserException;

}
