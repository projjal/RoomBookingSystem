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
 * This entity stores the mapping between booking entity and the equipment entity 
 * It tells which equipments are booked for a booking.
 *
 */
@Entity
@Table(name="equipment_line_items")
public class EquipmentLineItem {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;

	@ManyToOne
	@JoinColumn(name="eid")
	private Equipment equipment;

	private double price;

	private int quantity;


	/**
	 * Default constructor
	 */
	public EquipmentLineItem() {
	}




	/**
	 * @param id
	 * @param equipment
	 * @param price
	 * @param quantity
	 */
	public EquipmentLineItem(int id, Equipment equipment, double price, int quantity) {
		this.id = id;
		this.equipment = equipment;
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
	 * @return the equipment
	 */
	public Equipment getEquipment() {
		return equipment;
	}




	/**
	 * @param equipment the equipment to set
	 */
	public void setEquipment(Equipment equipment) {
		this.equipment = equipment;
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
