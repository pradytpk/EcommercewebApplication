package com.group11.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.group11.modal.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {

}
