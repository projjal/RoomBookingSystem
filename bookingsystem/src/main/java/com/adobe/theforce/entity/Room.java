package com.adobe.theforce.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name ="rooms")
public class Room {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	private String type;
	
	private int capacity;
	
	@Column(name = "room_description")
	private String description; 
	
	private String image;
	
	private Boolean status;
	
	@Column(name = "price_day")
	private Double pricePerDay;
	
	@Column(name = "price_hour")
	private Double pricePerHour;
	
	/*
	 * Default constructor
	 */
	
	public Room() {
		super();
	}

	/*
	 * 
	 * Parameterized constructor
	 */
	
	public Room(String type, int capacity, Double pricePerDay, Double pricePerHour) {
		super();
		this.type = type;
		this.capacity = capacity;
		this.pricePerDay = pricePerDay;
		this.pricePerHour = pricePerHour;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public int getCapacity() {
		return capacity;
	}

	public void setCapacity(int capacity) {
		this.capacity = capacity;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public Boolean getStstus() {
		return status;
	}

	public void setStstus(Boolean status) {
		this.status = status;
	}

	public Double getPricePerDay() {
		return pricePerDay;
	}

	public void setPricePerDay(Double pricePerDay) {
		this.pricePerDay = pricePerDay;
	}

	public Double getPricePerHour() {
		return pricePerHour;
	}

	public void setPricePerHour(Double pricePerHour) {
		this.pricePerHour = pricePerHour;
	}
	
	
}
