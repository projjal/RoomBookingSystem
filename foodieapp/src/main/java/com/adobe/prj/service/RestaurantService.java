package com.adobe.prj.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.adobe.prj.dao.RestaurantDao;
import com.adobe.prj.entity.Restaurant;

@Service
public class RestaurantService {
	
	@Autowired
	private RestaurantDao restaurantDao;
	
	@Transactional
	public void addRestaurant(Restaurant restaurant) {
		restaurantDao.addRestaurant(restaurant);
	}
	
	public List<Restaurant> getRestaurants(){
		return restaurantDao.getRestaurants();
	}
	
	public Restaurant getRestaurant(int id) {
		return restaurantDao.getRestaurant(id);
	}
	
	@Transactional
	public void deleteRestaurant(int id) {
		restaurantDao.deleteRestaurant(id);
	}
	
	@Transactional
	public void updateRestaurant(Restaurant restaurant) {
		restaurantDao.updateRestaurant(restaurant);
	}
}
