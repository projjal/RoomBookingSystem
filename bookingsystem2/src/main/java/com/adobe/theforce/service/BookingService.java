package com.adobe.theforce.service;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.adobe.theforce.dao.BookingDao;
import com.adobe.theforce.entity.Booking;
import com.adobe.theforce.util.BookingComparator;


@Service
public class BookingService {
	@Autowired
	private BookingDao bookingDao;
	
	@Transactional
	public void addBooking(Booking booking)  throws Exception{
		int roomID = booking.getRoom().getId();
		Date date = booking.getBookedForDate();
		String slot = booking.getDuration();
//		if(isAvailable(roomID,date,slot))
			bookingDao.addBooking(booking);
//		else{
//			throw new DaoException("Room Not Available");
//		}
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
		
		

//	    System.out.println(date.getYear() + "  " + date.getMonth() + " " + date.getDate());
		for(Booking i : b){
//			System.out.println(date);
//			System.out.println(i.getBookingDate().getYear() + " " + i.getBookingDate().getMonth() + " " + i.getBookingDate().getDate());
			if((date.getYear() == i.getBookedForDate().getYear())&&(date.getMonth() == i.getBookedForDate().getMonth())&&(date.getDate() == i.getBookedForDate().getDate()))
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
	
	public Boolean isAvailable(int roomId,Date date,String slot){
		Boolean ans = false;
		Integer[] parsedDuration = parseDuration(slot);
		String type = "";
		if(parsedDuration[1] - parsedDuration[0] < 3){
			type = "Hourly";
		}
		else
			if(parsedDuration[1] - parsedDuration[0] < 5){
				type = "Half-day";
			}
			else
				type = "Full-day";
		
		List<String> freeSlots = null;
		try {
			 freeSlots = getFreeSlots(roomId, date, type);
		} catch (Exception e) {
			// TODO Auto-generated catch block
//			e.printStackTrace();
		}
		
		for(String freeSlot:freeSlots){
			if(freeSlot.equals(slot)){
				ans = true;
			}
		}
		return ans;
	}
	public Integer[] parseDuration(String duration){
		Integer[] parsed = new Integer[2];
		String[] reqTime = duration.split("-");
		String startTime = reqTime[0];
		String endTime = reqTime[1];
		String[] startHour = startTime.split(":");
		String[] endHour = endTime.split(":");
		parsed[0] = Integer.parseInt(startHour[0]);
		parsed[1] = Integer.parseInt(endHour[0]);
		 return parsed;
	}
	
	public boolean isOverlap(Integer[] interval1,Integer[] interval2){
		boolean ans = false;
		
		if((interval2[0] == interval1[0] && interval2[1] == interval1[1]))
				ans = true;
		
		if((interval2[0] < interval1[0] &&  interval1[0] < interval2[1]) || (interval2[0] < interval1[1] &&  interval1[1] < interval2[1])){
			ans = true;
		}
		if((interval1[0] < interval2[0] &&  interval2[0] < interval1[1]) || (interval1[0] < interval2[1] &&  interval2[1] < interval1[1])){
			ans = true;
		}
		System.out.println(ans);
		return ans;
	}
	
	public List<String> getFreeSlots(int roomId,Date date,String slot) throws Exception{
		List<Booking> bookings = this.getTodayBookingList(date);
		List<String> bookedSlots = new ArrayList<String>();
		int allDayFlag = 1;
		String[] allSlots = {"08:00-09:00","09:00-10:00","10:00-11:00","11:00-12:00","12:00-13:00","13:00-14:00","14:00-15:00","15:00-16:00","16:00-17:00","17:00-18:00","18:00-19:00","19:00-20:00","20:00-21:00","21:00-22:00","22:00-23:00"};
		String[] halfDaySlots = {"08:00-12:00","13:00-17:00","19:00-23:00"};
		String[] fullDaySlot = {"08:00-23:00"};
		for(Booking b:bookings){
			if(b.getRoom().getId() == roomId){
				bookedSlots.add(b.getDuration());
				allDayFlag = 0;
			}
		}
		
		for(String st : bookedSlots){
			System.out.println(st);
		}
		
		List<String> freeSlots = new ArrayList<String>();
		if(slot.equals("Hourly"))
		{	
			System.out.println("here");
			for(String slots:allSlots){
				System.out.println("Free Slot = " + slots);
				int flag = 1;
				Integer[] parsedFreeSlot = parseDuration(slots);
					for(String booked:bookedSlots){
						System.out.println("Booked slot = " + booked);
						System.out.print(" ---1 ");
						Integer[] parsedBookedSlot = parseDuration(booked);
						System.out.println(parsedFreeSlot[0] + " " + parsedFreeSlot[1] + "----" + parsedBookedSlot[0] + " " + parsedBookedSlot[1]);
						if(isOverlap(parsedFreeSlot, parsedBookedSlot)){
							flag = 0;
						}
					}
					if(flag == 1){
						freeSlots.add(slots);
					}
			}
		}
		else
		if(slot.equals("Half-day")){
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
					String betweenSlot = allSlots[i];
					Integer[] parsedBetweenSlot = parseDuration(betweenSlot);
					for(String booked:bookedSlots){
						 Integer[] parsedBookedSlot = parseDuration(booked);
						 if(isOverlap(parsedBetweenSlot,parsedBookedSlot)){
							 flag = 0;
						 }
					}
				}
				if(flag == 1){
					freeSlots.add(slots);
				}
			}
		}
		else{
			if(allDayFlag == 1){
				freeSlots.add(fullDaySlot[0]);
			}
		}
		return freeSlots;	
	}
}
