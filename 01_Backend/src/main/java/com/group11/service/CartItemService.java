package com.group11.service;

import com.group11.exception.CartItemException;
import com.group11.exception.UserException;
import com.group11.modal.Cart;
import com.group11.modal.CartItem;
import com.group11.modal.Product;

public interface CartItemService {

	public CartItem createCartItem(CartItem cartItem);

	public CartItem updateCartItem(Long userId, Long id, CartItem cartItem) throws CartItemException, UserException;

	public CartItem isCartItemExist(Cart cart, Product product, String size, Long userId);

	public void removeCartItem(Long userId, Long cartItemId) throws CartItemException, UserException;

	public CartItem findCartItemById(Long cartItemId) throws CartItemException;

}
