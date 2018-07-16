package com.adobe.prj.dao;

import java.util.List;

import com.adobe.prj.entity.Restaurant;

public interface RestaurantDao {
	void addRestaurant(Restaurant restaurant);
	List<Restaurant> getRestaurants();
	Restaurant getRestaurant(int id);
	void deleteRestaurant(int id);
	void updateRestaurant(Restaurant restaurant);
}
