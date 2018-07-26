package com.adobe.theforce.web;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.adobe.theforce.dao.DaoException;
import com.adobe.theforce.entity.Booking;
import com.adobe.theforce.entity.ExceptionJSONInfo;
import com.adobe.theforce.service.BookingService;

@RestController
public class BookingController {
	
	@Autowired
	private BookingService bookingService;
	
	
	@RequestMapping(value = "/api/bookings",method = RequestMethod.GET)
	public @ResponseBody List<Booking> getBookings(@RequestParam(required = false) Integer limit)  throws DaoException {
		
		if(limit != null){
			try{
				return bookingService.getBookings().subList(0, limit);
			}catch(Exception e){
				System.out.println("limit exceeding maximum size of booking database");
				return null;
			}
		}
		else
			try{
				return bookingService.getBookings();
			} catch (Exception e) {
				// TODO Auto-generated catch block
				throw new DaoException("Unable to get Bookings");
			}
	}
	
	@RequestMapping(value = "/api/bookings",method = RequestMethod.POST)
	public int addBooking(@RequestBody Booking r)  throws DaoException {
		try{
		bookingService.addBooking(r);
		return r.getId();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			throw new DaoException("Unable to Add Booking");
		}
	}
	
	@RequestMapping(value = "/api/bookings/{id}",method = RequestMethod.DELETE)
	public void deleteBooking(@PathVariable("id") int id)  throws DaoException {
		try{
		bookingService.deleteBooking(id);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw new DaoException("Unable to delete Booking with Id = " + id);
		}
	}
	
	@RequestMapping(value = "/api/bookings/{id}",method = RequestMethod.PUT)
	public void updateBooking(@PathVariable("id") int id,@RequestBody Booking r)  throws DaoException {
		try{
		bookingService.updateBooking(r);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw new DaoException("Unable to update Booking with Id = " + id);
		}
	}
	
	@RequestMapping(value = "/api/bookings/{id}",method = RequestMethod.GET)
	public @ResponseBody Booking getBooking(@PathVariable("id") int id)  throws DaoException {
		try{
		return bookingService.getBooking(id);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw new DaoException("Unable to get Booking with Id = " + id);
		}
	}
	
	@RequestMapping(value = "/api/bookings/latest",method = RequestMethod.GET)
	public @ResponseBody List<Booking> getBookingsLatest()  throws DaoException {
		try{
		return bookingService.getLatestBookings();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw new DaoException("Unable to get Latest Bookings");
		}
	}
	
	@RequestMapping(value = "/api/bookings/stats",method = RequestMethod.GET)
	public @ResponseBody List<Integer> getTodaysBookings()  throws DaoException {
		List<Integer> result = new ArrayList<Integer>();
		try{
		result.add(bookingService.getTodaysBookings());
		result.add(bookingService.getTotalBookings());
		result.add(bookingService.getBookingsMadeToday());
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw new DaoException("Unable to get todays Bookings");
		}
		return result;
	}
	
	@RequestMapping(value = "/api/bookings/givenDate",method = RequestMethod.POST)
	public @ResponseBody List<Booking> getTodayBookingList(@RequestBody String date)  throws DaoException {
		List<Booking> result = new ArrayList<Booking>();
//		System.out.println(date);
		
		DateFormat readFormat = new SimpleDateFormat( "MMM dd yyyy");

	    Date date1 = null;
//	    System.out.println(date1);
	    date = date.replace("\"", "");
	    date = date.replace("+", " ");
	    date = date.replace("=", "");
	    
//	    System.out.println(date1);

	    try {
	       date1 = readFormat.parse( date );
	    } catch ( Exception e ) {
	        throw new DaoException("Unable to parse Date");
	    }

		try{
			
		result = (bookingService.getTodayBookingList(date1));
		} catch (Exception e) {
			// TODO Auto-generated catch block
//			e.printStackTrace();
			throw new DaoException("Unable to get the Bookings");
		}
		return result;
	}
	
	@RequestMapping(value = "/api/bookings/getSlots",method = RequestMethod.POST)
	public @ResponseBody List<String> getFreeSlots(@RequestParam("roomId") int roomId,@RequestParam("bookingDate") Date date,@RequestParam("slot") String slot)  throws DaoException {
		List<String> result = null;
		try{
		result = bookingService.getFreeSlots(roomId,date,slot);
		}catch(Exception ex){
			throw new DaoException("Unable to get Slots");
		}
		return result;
	}
	
	@ExceptionHandler(DaoException.class)
	public @ResponseBody ExceptionJSONInfo handleDaoException(HttpServletRequest request, DaoException ex){
		
		ExceptionJSONInfo response = new ExceptionJSONInfo();
		response.setMessage(ex.getMessage());
		
		return response;
	}

}
