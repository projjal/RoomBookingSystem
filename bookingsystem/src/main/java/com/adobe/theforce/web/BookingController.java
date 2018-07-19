package com.adobe.theforce.web;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.adobe.theforce.entity.Booking;
import com.adobe.theforce.service.AdministratorService;
import com.fasterxml.jackson.databind.node.JsonNodeFactory;

@RestController
public class BookingController {
	
	@Autowired
	private AdministratorService bookingService;
	
	
	@RequestMapping(value = "/api/bookings",method = RequestMethod.GET)
	public @ResponseBody List<Booking> getBookings(@RequestParam(required = false) Integer limit){
		if(limit != null){
			try{
				return bookingService.getBookings().subList(0, limit);
			}catch(Exception e){
				System.out.println("limit exceeding maximum size of booking database");
				return null;
			}
		}
		else
			return bookingService.getBookings();
	}
	
	@RequestMapping(value = "/api/bookings",method = RequestMethod.POST)
	public void addBooking(@RequestBody Booking r){
		bookingService.addBooking(r);
	}
	
	@RequestMapping(value = "/api/bookings/{id}",method = RequestMethod.DELETE)
	public void deleteBooking(@PathVariable("id") int id){
		bookingService.deleteBooking(id);
	}
	
	@RequestMapping(value = "/api/bookings/{id}",method = RequestMethod.PUT)
	public void updateBooking(@PathVariable("id") int id,@RequestBody Booking r){
		bookingService.updateBooking(r);
	}
	
	@RequestMapping(value = "/api/bookings/{id}",method = RequestMethod.GET)
	public @ResponseBody Booking getBooking(@PathVariable("id") int id){
		return bookingService.getBooking(id);
	}
	
	@RequestMapping(value = "/api/bookings/latest",method = RequestMethod.GET)
	public @ResponseBody List<Booking> getBookingsLatest(){
		return bookingService.getLatestBookings();
	}
	
	@RequestMapping(value = "/api/bookings/stats",method = RequestMethod.GET)
	public @ResponseBody List<Integer> getTodaysBookings(){
		List<Integer> result = new ArrayList<Integer>();
		result.add(bookingService.getTodaysBookings());
		result.add(bookingService.getTotalBookings());
		return result;
	}

}
