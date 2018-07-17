/**
 * 
 */
package com.adobe.theforce.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.adobe.theforce.dao.FoodDao;
import com.adobe.theforce.entity.Food;



/**
 * @author pchanda
 *
 */
@Service
public class FoodService {
	@Autowired
	private FoodDao foodDao;
	
	public List<Food> getFoods(){
		return foodDao.getFoods();
	}
	public Food getFood(int id){
		return foodDao.getFood(id);
	}
	
	@Transactional
	public void addFood(Food food){
		foodDao.addFood(food);
	}
	
	@Transactional
	public void deleteFood(int id){
		foodDao.deleteFood(id);
	}
	
	@Transactional
	public void updateFood(Food food){
		foodDao.updateFood(food);
	}
}
