package com.group11.service;

import com.group11.exception.ProductException;
import com.group11.modal.Cart;
import com.group11.modal.User;
import com.group11.request.AddItemRequest;

public interface CartService {

	public Cart createCart(User user);

	public String addCartItem(Long userId, AddItemRequest req) throws ProductException;

	public Cart findUserCart(Long userId);

}
