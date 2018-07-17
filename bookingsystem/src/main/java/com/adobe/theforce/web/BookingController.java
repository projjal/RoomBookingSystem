package com.adobe.theforce.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.adobe.theforce.entity.Room;
import com.adobe.theforce.service.BookingService;


@RestController
public class BookingController {
	
	@Autowired
	private BookingService bookingService;
	
	
	@RequestMapping(value = "/api/rooms",method = RequestMethod.GET)
	public @ResponseBody List<Room> getRooms(){
		return bookingService.getRooms();
	}
	
	@RequestMapping(value = "/api/rooms",method = RequestMethod.POST)
	public void addRoom(@RequestBody Room r){
		bookingService.addRoom(r);
	}
	
	@RequestMapping(value = "/api/rooms/{id}",method = RequestMethod.DELETE)
	public void deleteRoom(@PathVariable("id") int id){
		bookingService.deleteRoom(id);
	}
	
	@RequestMapping(value = "/api/rooms/{id}",method = RequestMethod.PUT)
	public void updateRoom(@PathVariable("id") int id,@RequestBody Room r){
		bookingService.updateRoom(r);
	}
	
	@RequestMapping(value = "/api/rooms/{id}",method = RequestMethod.GET)
	public @ResponseBody Room getRoom(@PathVariable("id") int id){
		return bookingService.getRoom(id);
	}

}
