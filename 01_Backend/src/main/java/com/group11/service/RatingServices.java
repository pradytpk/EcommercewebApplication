package com.group11.service;

import java.util.List;

import com.group11.exception.ProductException;
import com.group11.modal.Rating;
import com.group11.modal.User;
import com.group11.request.RatingRequest;

public interface RatingServices {

	public Rating createRating(RatingRequest req, User user) throws ProductException;

	public List<Rating> getProductsRating(Long productId);

}
