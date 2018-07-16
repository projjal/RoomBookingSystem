package com.adobe.prj.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.adobe.prj.entity.Restaurant;
import com.adobe.prj.service.RestaurantService;

@RestController
public class RestaurantController {
	
	@Autowired
	private RestaurantService restaurantService;
	
	@RequestMapping(value="/api/restaurants", method = RequestMethod.GET)
	public @ResponseBody List<Restaurant> getRestaurants() {
		return restaurantService.getRestaurants();
	}
	
	@RequestMapping(value="/api/restaurants", method = RequestMethod.POST)
	public void addRestaurant(@RequestBody Restaurant r) {
		restaurantService.addRestaurant(r);
	}
	
	@RequestMapping(value="/api/restaurants/{id}", method = RequestMethod.DELETE)
	public void deleteRestaurant(@PathVariable("id") int id) {
		restaurantService.deleteRestaurant(id);
	}
	
	@RequestMapping(value="/api/restaurants/{id}", method = RequestMethod.PUT)
	public void updateRestaurant(@PathVariable("id") int id, @RequestBody Restaurant r) {
		restaurantService.updateRestaurant(r);
	}
	
	@RequestMapping(value="/api/restaurants/{id}", method = RequestMethod.GET)
	public @ResponseBody Restaurant getRestaurant(@PathVariable("id") int id) {
		return restaurantService.getRestaurant(id);
	}
}
