package com.group11.service;

import java.util.List;

import com.group11.exception.ProductException;
import com.group11.modal.Review;
import com.group11.modal.User;
import com.group11.request.ReviewRequest;

public interface ReviewService {

	public Review createReview(ReviewRequest req, User user) throws ProductException;

	public List<Review> getAllReview(Long productId);

}
