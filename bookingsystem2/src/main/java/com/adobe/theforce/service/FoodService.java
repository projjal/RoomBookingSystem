package com.adobe.theforce.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.adobe.theforce.dao.FoodDao;
import com.adobe.theforce.entity.Food;


/**
 * 
 * Service class for Food entity
 *
 */
@Service
public class FoodService {
	@Autowired
	private FoodDao foodDao;

	public List<Food> getFoods()  throws Exception{
		return foodDao.getFoods();
	}
	public Food getFood(int id)  throws Exception{
		return foodDao.getFood(id);
	}

	@Transactional
	public void addFood(Food food)  throws Exception{
		foodDao.addFood(food);
	}

	@Transactional
	public void deleteFood(int id)  throws Exception{
		foodDao.deleteFood(id);
	}

	@Transactional
	public void updateFood(Food food)  throws Exception{
		foodDao.updateFood(food);
	}

}
