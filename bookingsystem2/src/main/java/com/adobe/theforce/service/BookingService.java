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
	public List<Booking> getTodayBookingList(Date date) throws Exception {
		List<Booking> result = new ArrayList<Booking>();
		List<Booking> b = bookingDao.getBookings();
		//////////////////////////////////////////////
		
		
<<<<<<< Updated upstream
	    DateFormat readFormat = new SimpleDateFormat( "MMM dd yyyy");

	    Date date = null;
//	    System.out.println(date1);
	    date1 = date1.replace("\"", "");
	    date1 = date1.replace("+", " ");
	    date1 = date1.replace("=", "");
	    
//	    System.out.println(date1);


	    try {
	       date = readFormat.parse( date1 );
	    } catch ( Exception e ) {
	        e.printStackTrace();
	        throw e;
	    }
=======
>>>>>>> Stashed changes
//	    System.out.println(date.getYear() + "  " + date.getMonth() + " " + date.getDate());
		for(Booking i : b){
//			System.out.println(date);
//			System.out.println(i.getBookingDate().getYear() + " " + i.getBookingDate().getMonth() + " " + i.getBookingDate().getDate());
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
	
	public List<String> getFreeSlots(int roomId,Date date,String slot) throws Exception{
		List<Booking> bookings = this.getTodayBookingList(date);
		List<String> bookedSlots = new ArrayList<String>();
		String[] allSlots = {"8:00-9:00","9:00-10:00","10:00-11:00","11:00-12:00","12:00-13:00","13:00-14:00","14:00-15:00","15:00-16:00","16:00-17:00","17:00-18:00","18:00-19:00","19:00-20:00","20:00-21:00","21:00-22:00","22:00-23:00"};
		String[] halfDaySlots = {"8:00-12:00","13:00-17:00","19:00-23:00"};
		for(Booking b:bookings){
			if(b.getRoomType().equals(roomId)){
				bookedSlots.add(b.getDuration());
			}
		}
		
		List<String> freeSlots = new ArrayList<String>();
		if(slot.equals("allDay"))
		{	
			for(String slots:allSlots){
				int flag = 1;
				String[] start = slots.split("-");
					for(String booked:bookedSlots){
						String[] bookedStart = booked.split("-");
						if(start[0].equals(bookedStart[0])){
							flag = 0;
						}
					}
					if(flag == 1){
						freeSlots.add(slots);
					}
			}
		}
		else{
			for(String slots:halfDaySlots){
				int flag = 1;
				String[] start = slots.split("-");
				int startIndex = 0;
				if(start[0].equals("13:00")){
					startIndex = 5;
				}
				else if(start[0].equals("19:00")){
					startIndex = 11;
				}
				for(int i=startIndex;i<startIndex+4;++i){
					String[] betweenSlot = allSlots[i].split("-");
					for(String booked:bookedSlots){
						 String[] bookedStart = booked.split("-");
						 if(betweenSlot[0].equals(bookedStart[0])){
							 flag = 0;
						 }
					}
				}
				if(flag == 1){
					freeSlots.add(slots);
				}
			}
		}
		return freeSlots;	
	}
}
