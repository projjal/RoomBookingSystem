/**
 * 
 */
package com.adobe.theforce.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.adobe.theforce.entity.Food;
import com.adobe.theforce.service.AdministratorService;

/**
 * @author pchanda
 *
 */
@RestController
public class FoodController {
	@Autowired
	private AdministratorService foodService;
	
	
	@RequestMapping(value = "/api/foods",method = RequestMethod.GET)
	public @ResponseBody List<Food> getFoods(){
		return foodService.getFoods();
	}
	
	@RequestMapping(value = "/api/foods",method = RequestMethod.POST)
	public int addFood(@RequestBody Food r){
		foodService.addFood(r);
		return r.getId();
	}
	
	@RequestMapping(value = "/api/foods/{id}",method = RequestMethod.DELETE)
	public void deleteFood(@PathVariable("id") int id){
		foodService.deleteFood(id);
	}
	
	@RequestMapping(value = "/api/foods/{id}",method = RequestMethod.PUT)
	public void updateFood(@PathVariable("id") int id,@RequestBody Food r){
		foodService.updateFood(r);
	}
	
	@RequestMapping(value = "/api/foods/{id}",method = RequestMethod.GET)
	public @ResponseBody Food getFood(@PathVariable("id") int id){
		return foodService.getFood(id);
	}

}
