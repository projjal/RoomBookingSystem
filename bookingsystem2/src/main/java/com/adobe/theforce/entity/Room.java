package com.adobe.theforce.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
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
	
	//private ArrayList<Integer> layoutId = new ArrayList<Integer>();
	private ArrayList<String> layoutName = new ArrayList<String>();
	
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
	 * Parameterized Constructor
	 */

	
	/**
	 * @param id
	 * @param type
	 * @param capacity
	 * @param description
	 * @param layoutId
	 * @param image
	 * @param status
	 * @param pricePerDay
	 * @param pricePerHour
	 */
	public Room(int id, String type, int capacity, String description, ArrayList<String> layoutName, String image,
			Boolean status, Double pricePerDay, Double pricePerHour) {
		this.id = id;
		this.type = type;
		this.capacity = capacity;
		this.description = description;
		this.layoutName = layoutName;
		this.image = image;
		this.status = status;
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

	public Boolean getStatus() {
		return status;
	}

	public void setStatus(Boolean status) {
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

	/**
	 * @return the layoutId
	 */
	public ArrayList<String> getLayoutName() {
		return layoutName;
	}

	/**
	 * @param layoutId the layoutId to set
	 */
	public void setLayoutId(ArrayList<String> layoutId) {
		this.layoutName = layoutName;
	}
	
	
}
