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


/**
 * 
 * rooms entity specification
 * It store the info about the all rooms in the system.
 *
 */
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


	@OneToMany(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
	@JoinColumn(name="layoutline_id")
	private List<LayoutLineItem> layoutItems = new ArrayList<LayoutLineItem>(); 

	private String image;

	private Boolean status;


	@Column(name = "price_day")
	private Double pricePerDay;

	@Column(name = "price_hour")
	private Double pricePerHour;

	/**
	 * 
	 */
	public Room() {
	}

	/**
	 * @param id
	 * @param type
	 * @param capacity
	 * @param description
	 * @param layoutItems
	 * @param image
	 * @param status
	 * @param pricePerDay
	 * @param pricePerHour
	 */
	public Room(int id, String type, int capacity, String description, List<LayoutLineItem> layoutItems, String image,
			Boolean status, Double pricePerDay, Double pricePerHour) {
		this.id = id;
		this.type = type;
		this.capacity = capacity;
		this.description = description;
		this.layoutItems = layoutItems;
		this.image = image;
		this.status = status;
		this.pricePerDay = pricePerDay;
		this.pricePerHour = pricePerHour;
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
	 * @return the type
	 */
	public String getType() {
		return type;
	}

	/**
	 * @param type the type to set
	 */
	public void setType(String type) {
		this.type = type;
	}

	/**
	 * @return the capacity
	 */
	public int getCapacity() {
		return capacity;
	}

	/**
	 * @param capacity the capacity to set
	 */
	public void setCapacity(int capacity) {
		this.capacity = capacity;
	}

	/**
	 * @return the description
	 */
	public String getDescription() {
		return description;
	}

	/**
	 * @param description the description to set
	 */
	public void setDescription(String description) {
		this.description = description;
	}

	/**
	 * @return the layoutItems
	 */
	public List<LayoutLineItem> getLayoutItems() {
		return layoutItems;
	}

	/**
	 * @param layoutItems the layoutItems to set
	 */
	public void setLayoutItems(List<LayoutLineItem> layoutItems) {
		this.layoutItems = layoutItems;
	}

	/**
	 * @return the image
	 */
	public String getImage() {
		return image;
	}

	/**
	 * @param image the image to set
	 */
	public void setImage(String image) {
		this.image = image;
	}

	/**
	 * @return the status
	 */
	public Boolean getStatus() {
		return status;
	}

	/**
	 * @param status the status to set
	 */
	public void setStatus(Boolean status) {
		this.status = status;
	}

	/**
	 * @return the pricePerDay
	 */
	public Double getPricePerDay() {
		return pricePerDay;
	}

	/**
	 * @param pricePerDay the pricePerDay to set
	 */
	public void setPricePerDay(Double pricePerDay) {
		this.pricePerDay = pricePerDay;
	}

	/**
	 * @return the pricePerHour
	 */
	public Double getPricePerHour() {
		return pricePerHour;
	}

	/**
	 * @param pricePerHour the pricePerHour to set
	 */
	public void setPricePerHour(Double pricePerHour) {
		this.pricePerHour = pricePerHour;
	}





}
