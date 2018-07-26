package com.adobe.theforce.util;

import java.util.Comparator;

import com.adobe.theforce.entity.Booking;

/**
 * 
 * utility class to compare two bookings in terms of their booking data
 *
 */
public class BookingComparator implements Comparator<Booking> {

	@Override
	public int compare(Booking o1, Booking o2) {
		return o1.getBookingDate().compareTo(o2.getBookingDate());
	}

}
