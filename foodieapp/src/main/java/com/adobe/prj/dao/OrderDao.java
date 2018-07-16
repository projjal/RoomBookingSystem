package com.adobe.prj.dao;

import java.util.List;

import com.adobe.prj.entity.Order;

public interface OrderDao {
	List<Order> getOrders();
	void placeOrder(Order order);
}
