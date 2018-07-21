package com.adobe.theforce.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="food_line_items")
public class FoodLineItem {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
//	@ManyToOne
//	@JoinColumn(name="fid")
//	private Food food;
	private String foodItemName;
	
	private double pricePerUnit;
	
	private int quantity;

	private double totalPrice;

	/**
	 * 
	 */
	public FoodLineItem() {
	}

	/**
	 * @param id
	 * @param foodItemName
	 * @param pricePerUnit
	 * @param quantity
	 * @param totalPrice
	 */
	public FoodLineItem(int id, String foodItemName, double pricePerUnit, int quantity, double totalPrice) {
		this.id = id;
		this.foodItemName = foodItemName;
		this.pricePerUnit = pricePerUnit;
		this.quantity = quantity;
		this.totalPrice = totalPrice;
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
	 * @return the foodItemName
	 */
	public String getFoodItemName() {
		return foodItemName;
	}

	/**
	 * @param foodItemName the foodItemName to set
	 */
	public void setFoodItemName(String foodItemName) {
		this.foodItemName = foodItemName;
	}

	/**
	 * @return the pricePerUnit
	 */
	public double getPricePerUnit() {
		return pricePerUnit;
	}

	/**
	 * @param pricePerUnit the pricePerUnit to set
	 */
	public void setPricePerUnit(double pricePerUnit) {
		this.pricePerUnit = pricePerUnit;
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

	/**
	 * @return the totalPrice
	 */
	public double getTotalPrice() {
		return totalPrice;
	}

	/**
	 * @param totalPrice the totalPrice to set
	 */
	public void setTotalPrice(double totalPrice) {
		this.totalPrice = totalPrice;
	}
	
	

}
