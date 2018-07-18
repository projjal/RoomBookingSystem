package com.adobe.theforce.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.adobe.theforce.dao.BookingDao;
import com.adobe.theforce.entity.Booking;

@Service
public class BukingService {
	
	@Autowired
	private BookingDao bookingDao;
	
	@Transactional
	public void addBooking(Booking booking){
		bookingDao.addBooking(booking);
	}
	
	public List<Booking> getBookings(){
		return bookingDao.getBookings();
	}
	
	public Booking getBooking(int id){
		return bookingDao.getBooking(id);
	}
	
	@Transactional
	public void deleteBooking(int id){
		bookingDao.deleteBooking(id);
	}
	
	@Transactional
	public void updateBooking(Booking booking){
		bookingDao.updateBooking(booking);
	}

}
