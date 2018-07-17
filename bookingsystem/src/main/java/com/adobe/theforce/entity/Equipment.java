package com.adobe.theforce.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name ="equipments")
public class Equipment {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "name")
	private String Name;
	
	private double price;
	
	private int quantity;
	
	private boolean multiunits;

	/**
	 * Default constructor
	 */
	public Equipment() {
	}

	/**
	 * @param id
	 * @param name
	 * @param price
	 * @param quantity
	 * @param multiunits
	 */
	public Equipment(int id, String name, double price, int quantity, boolean multiunits) {
		this.id = id;
		Name = name;
		this.price = price;
		this.quantity = quantity;
		this.multiunits = multiunits;
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
	 * @return the name
	 */
	public String getName() {
		return Name;
	}

	/**
	 * @param name the name to set
	 */
	public void setName(String name) {
		Name = name;
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

	/**
	 * @return the multiunits
	 */
	public boolean isMultiunits() {
		return multiunits;
	}

	/**
	 * @param multiunits the multiunits to set
	 */
	public void setMultiunits(boolean multiunits) {
		this.multiunits = multiunits;
	}
	
	
	
	
	
	
	

}
