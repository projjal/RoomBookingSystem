package com.adobe.prj.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.adobe.prj.entity.Order;
import com.adobe.prj.service.OrderService;

@RestController
public class OrderController {

	@Autowired
	private OrderService orderService;
	
	@RequestMapping(value="/api/orders", method=RequestMethod.GET)
	public @ResponseBody List<Order> getOrders(){
		return orderService.getOrders();
	}
	
	@RequestMapping(value="/api/orders", method = RequestMethod.POST)
	public void addOrders(@RequestBody Order order){
		orderService.addOrder(order);
	}
}
