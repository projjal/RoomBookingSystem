/**
 * 
 */
package com.adobe.theforce.dao;

import java.util.List;

import com.adobe.theforce.entity.Food;

/**
 * @author pchanda
 *
 */
public interface FoodDao {
	List<Food> getFoods();
	Food getFood(int id);
	void addFood(Food food);
	void deleteFood(int id);
	void updateFood(Food food);
}
