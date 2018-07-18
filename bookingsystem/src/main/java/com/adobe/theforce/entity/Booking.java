/**
 * 
 */
package com.adobe.theforce.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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
	
	private enum status{
		PENDING, CONFIRMED, CANCELLED;
	}
	
	private enum paymentMethod{
		CASH, CHEQUE;
	}
	
	/* Total cost of booking*/
	private double total;

	public Booking() {
	}

	public Booking(int id, Date bookingDate, double duration, double total) {
		this.id = id;
		this.bookingDate = bookingDate;
		this.duration = duration;
		this.total = total;
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
