package com.adobe.theforce.dao;

import java.util.List;

import com.adobe.theforce.entity.Booking;

public interface BookingDao {
	void addBooking(Booking booking) throws Exception;
	List<Booking> getBookings() throws Exception;
	Booking getBooking(int id) throws Exception;
	void deleteBooking(int id) throws Exception;
	void updateBooking(Booking booking) throws Exception;
}
