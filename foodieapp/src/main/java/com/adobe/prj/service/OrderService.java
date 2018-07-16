package com.adobe.prj.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.adobe.prj.dao.OrderDao;
import com.adobe.prj.entity.LineItem;
import com.adobe.prj.entity.Order;
import com.adobe.prj.entity.Product;

@Service
public class OrderService {

	@Autowired
	private OrderDao orderDao;
	
	public List<Order> getOrders(){
		return orderDao.getOrders();
	}
	
	@Transactional
	public void addOrder(Order order) {
		orderDao.placeOrder(order);
		List<LineItem> items = order.getItems();
		for(LineItem item : items) {
//			Product p = item.getProduct();
//			Product p = productDao.getProduct(item.getProduct().getId());
//			p.setQuantity(p.getQuantity() - item.getQuantity());
//			productDao.merge(p); //update total quantity in product table
			
			
			
		}
	}
}
