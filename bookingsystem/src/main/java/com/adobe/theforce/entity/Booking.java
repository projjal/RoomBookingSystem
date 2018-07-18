/**
 * 
 */
package com.adobe.theforce.entity;

import java.util.ArrayList;
import java.util.Date;
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
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;




/**
 * @author vvashish
 *
 */

@Entity
@Table(name="bookings")
public class Booking {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	@Column(name="booking_date")
	@Temporal(TemporalType.TIMESTAMP)
	private Date bookingDate;
	
	private double duration;
	private String status;
	private String paymentMethod;
	
	
	@OneToOne(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
	@JoinColumn(name="room_id")
	private Room room;
	
	@OneToOne(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
	@JoinColumn(name="client_id")
	private Client client;
	
	@OneToOne(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
	@JoinColumn(name="layout_id")
	private Layout layout;
	
	@OneToMany(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
	@JoinColumn(name="equipmentline_id")
	private List<EquipmentLineItem> equipmentItems = new ArrayList<EquipmentLineItem>();

	@OneToMany(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
	@JoinColumn(name="foodline_id")
	private List<FoodLineItem> foodItems = new ArrayList<FoodLineItem>();

	
	
	/* Total cost of booking*/
	private double total;



	/**
	 * 
	 */
	public Booking() {
	}



	/**
	 * @param id
	 * @param bookingDate
	 * @param duration
	 * @param client
	 * @param room
	 * @param layout
	 * @param equipmentItems
	 * @param foodItems
	 * @param total
	 */
	public Booking(int id, Date bookingDate, double duration, Client client, Room room, Layout layout,
			List<EquipmentLineItem> equipmentItems, List<FoodLineItem> foodItems, double total) {
		this.id = id;
		this.bookingDate = bookingDate;
		this.duration = duration;
		this.client = client;
		this.room = room;
		this.layout = layout;
		this.equipmentItems = equipmentItems;
		this.foodItems = foodItems;
		this.total = total;
		this.paymentMethod = Enums.CASH.toString();
		this.status = Enums.PENDING.toString();
	}

	

	/**
	 * @return the status
	 */
	public String getStatus() {
		return status;
	}



	/**
	 * @param status the status to set
	 */
	public void setStatus(String status) {
		this.status = status;
	}



	/**
	 * @return the paymentMethod
	 */
	public String getPaymentMethod() {
		return paymentMethod;
	}



	/**
	 * @param paymentMethod the paymentMethod to set
	 */
	public void setPaymentMethod(String paymentMethod) {
		this.paymentMethod = paymentMethod;
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
	 * @return the bookingDate
	 */
	public Date getBookingDate() {
		return bookingDate;
	}



	/**
	 * @param bookingDate the bookingDate to set
	 */
	public void setBookingDate(Date bookingDate) {
		this.bookingDate = bookingDate;
	}



	/**
	 * @return the duration
	 */
	public double getDuration() {
		return duration;
	}



	/**
	 * @param duration the duration to set
	 */
	public void setDuration(double duration) {
		this.duration = duration;
	}



	/**
	 * @return the client
	 */
	public Client getClient() {
		return client;
	}



	/**
	 * @param client the client to set
	 */
	public void setClient(Client client) {
		this.client = client;
	}



	/**
	 * @return the room
	 */
	public Room getRoom() {
		return room;
	}



	/**
	 * @param room the room to set
	 */
	public void setRoom(Room room) {
		this.room = room;
	}



	/**
	 * @return the layout
	 */
	public Layout getLayout() {
		return layout;
	}



	/**
	 * @param layout the layout to set
	 */
	public void setLayout(Layout layout) {
		this.layout = layout;
	}



	/**
	 * @return the equipmentItems
	 */
	public List<EquipmentLineItem> getEquipmentItems() {
		return equipmentItems;
	}



	/**
	 * @param equipmentItems the equipmentItems to set
	 */
	public void setEquipmentItems(List<EquipmentLineItem> equipmentItems) {
		this.equipmentItems = equipmentItems;
	}



	/**
	 * @return the foodItems
	 */
	public List<FoodLineItem> getFoodItems() {
		return foodItems;
	}



	/**
	 * @param foodItems the foodItems to set
	 */
	public void setFoodItems(List<FoodLineItem> foodItems) {
		this.foodItems = foodItems;
	}



	/**
	 * @return the total
	 */
	public double getTotal() {
		return total;
	}



	/**
	 * @param total the total to set
	 */
	public void setTotal(double total) {
		this.total = total;
	}
}
