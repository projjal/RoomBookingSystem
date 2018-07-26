package com.adobe.theforce.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


/**
 * 
 * @author lohumi
 * This entity stores the mapping between booking entity and the food entity.
 * It tells which food items are booked for a booking.
 *
 */
@Entity
@Table(name="food_line_items")
public class FoodLineItem {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	@ManyToOne
	@JoinColumn(name="fid")
	private Food food;
//	private String foodItemName;
	
//	private double pricePerUnit;
//	
//	private int quantity;
//
//	private double totalPrice;
	
	private double price;
	
	private int quantity;

	/**
	 * 
	 */
	public FoodLineItem() {
	}

	/**
	 * @param id
	 * @param food
	 * @param price
	 * @param quantity
	 */
	public FoodLineItem(int id, Food food, double price, int quantity) {
		this.id = id;
		this.food = food;
		this.price = price;
		this.quantity = quantity;
	}

	/**
	 * @return the id
	 */
	public int getId() {
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(int id) {
		this.id = id;
	}

	/**
	 * @return the food
	 */
	public Food getFood() {
		return food;
	}

	/**
	 * @param food the food to set
	 */
	public void setFood(Food food) {
		this.food = food;
	}

	/**
	 * @return the price
	 */
	public double getPrice() {
		return price;
	}

	/**
	 * @param price the price to set
	 */
	public void setPrice(double price) {
		this.price = price;
	}

	/**
	 * @return the quantity
	 */
	public int getQuantity() {
		return quantity;
	}

	/**
	 * @param quantity the quantity to set
	 */
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	
	
	

}
