package com.adobe.theforce.service;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.adobe.theforce.dao.BookingComparator;
import com.adobe.theforce.dao.BookingDao;
import com.adobe.theforce.entity.Booking;
import com.google.protobuf.TextFormat.ParseException;


@Service
public class BookingService {
	@Autowired
	private BookingDao bookingDao;
	
	@Transactional
	public void addBooking(Booking booking)  throws Exception{
		bookingDao.addBooking(booking);
	}
	
	public List<Booking> getBookings()  throws Exception{
		return bookingDao.getBookings();
	}
	
	public Booking getBooking(int id)  throws Exception{
		return bookingDao.getBooking(id);
	}
	
	@Transactional
	public void deleteBooking(int id)  throws Exception{
		bookingDao.deleteBooking(id);
	}
	
	@Transactional
	public void updateBooking(Booking booking)  throws Exception{
		bookingDao.updateBooking(booking);
	}
	
	/*
	 * Latest 3 bookings for the dashboard
	 */
	
	public List<Booking> getLatestBookings()  throws Exception{
		List<Booking> b = bookingDao.getBookings();
		b.sort(new BookingComparator());
		List<Booking> result = new ArrayList<Booking>();
		int i = 0;
		System.out.println(b.size());
		while(i<3 && i<b.size()){
			result.add(b.get(i++));
		}
		return result;
	}
	
	/*
	 * Number of Bookings made today
	 */
	
	public int getBookingsMadeToday()  throws Exception{
		int count = 0;
		Calendar today = Calendar.getInstance();
		today.set(Calendar.HOUR_OF_DAY, 0);
		List<Booking> b = bookingDao.getBookings();
		for(Booking i : b){
//			System.out.println(today.getTime().getDate() + "||||||||||||" + i.getBookingDate().getDate());
//			System.out.println(today.getTime().getMonth() + "||||||||||||" + i.getBookingDate().getMonth());
//			System.out.println(today.getTime().getYear() + "||||||||||||" + i.getBookingDate().getYear());
			if((today.getTime().getYear() == i.getBookingDate().getYear())&&(today.getTime().getMonth() == i.getBookingDate().getMonth())&&(today.getTime().getDate() == i.getBookingDate().getDate()))
				{
					//System.out.println("count++");
					count++;
					
				}
		}
		return count;
	}
	public int getTodaysBookings()  throws Exception{
		int count = 0;
		Calendar today = Calendar.getInstance();
		today.set(Calendar.HOUR_OF_DAY, 0);
		List<Booking> b = bookingDao.getBookings();
		for(Booking i : b){
			System.out.println(today.getTime());
//			System.out.println(today.getTime().getMonth() + "||||||||||||" + i.getBookingDate().getMonth());
//			System.out.println(today.getTime().getYear() + "||||||||||||" + i.getBookingDate().getYear());
			if((today.getTime().getYear() == i.getBookedForDate().getYear())&&(today.getTime().getMonth() == i.getBookedForDate().getMonth())&&(today.getTime().getDate() == i.getBookedForDate().getDate()))
				{
					//System.out.println("count++");
					count++;
					
				}
		}
		return count;
	}
	public List<Booking> getTodayBookingList(String date1) throws Exception {
		List<Booking> result = new ArrayList<Booking>();
		Calendar today = Calendar.getInstance();
		today.set(Calendar.HOUR_OF_DAY, 0);
		List<Booking> b = bookingDao.getBookings();
		//////////////////////////////////////////////
		
		
	    DateFormat readFormat = new SimpleDateFormat( "MMM dd yyyy");

	    Date date = null;
	    try {
	       date = readFormat.parse( date1 );
	    } catch ( Exception e ) {
	        e.printStackTrace();
	        throw e;
	    }
	    System.out.println(date.getYear() + "  " + date.getMonth() + " " + date.getDate());
		for(Booking i : b){
//			System.out.println(date);
			System.out.println(i.getBookingDate().getYear() + " " + i.getBookingDate().getMonth() + " " + i.getBookingDate().getDate());
			if((date.getYear() == i.getBookingDate().getYear())&&(date.getMonth() == i.getBookingDate().getMonth())&&(date.getDate() == i.getBookingDate().getDate()))
				result.add(i);
		}
		return result;
	}
	
	/*
	 * Number of bookings for today
	 */
	
	
	/*
	 * Total number of bookings
	 */
	
	public int getTotalBookings()  throws Exception{
		return bookingDao.getBookings().size();
	}
	
}
