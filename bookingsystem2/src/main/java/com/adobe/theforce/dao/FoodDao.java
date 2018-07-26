/**
 * 
 */
package com.adobe.theforce.dao;

import java.util.List;

import com.adobe.theforce.entity.Food;

/**
 * 
 * DAO interface corresponding to food entity
 *
 */
public interface FoodDao {
	List<Food> getFoods() throws Exception;
	Food getFood(int id) throws Exception;
	void addFood(Food food) throws Exception;
	void deleteFood(int id) throws Exception;
	void updateFood(Food food) throws Exception;
}
