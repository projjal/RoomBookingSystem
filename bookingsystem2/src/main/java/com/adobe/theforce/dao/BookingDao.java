package com.adobe.theforce.dao;

import java.util.List;

import com.adobe.theforce.entity.Booking;

public interface BookingDao {
	void addBooking(Booking booking);
	List<Booking> getBookings();
	Booking getBooking(int id);
	void deleteBooking(int id);
	void updateBooking(Booking booking);
}
