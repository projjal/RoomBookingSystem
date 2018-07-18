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
import com.adobe.theforce.service.AdministratorService;


@RestController
public class RoomController {
	
	@Autowired
	private AdministratorService roomService;
	
	
	@RequestMapping(value = "/api/rooms",method = RequestMethod.GET)
	public @ResponseBody List<Room> getRooms(){
		return roomService.getRooms();
	}
	
	@RequestMapping(value = "/api/rooms",method = RequestMethod.POST)
	public void addRoom(@RequestBody Room r){
		roomService.addRoom(r);
	}
	
	@RequestMapping(value = "/api/rooms/{id}",method = RequestMethod.DELETE)
	public void deleteRoom(@PathVariable("id") int id){
		roomService.deleteRoom(id);
	}
	
	@RequestMapping(value = "/api/rooms/{id}",method = RequestMethod.PUT)
	public void updateRoom(@PathVariable("id") int id,@RequestBody Room r){
		roomService.updateRoom(r);
	}
	
	@RequestMapping(value = "/api/rooms/{id}",method = RequestMethod.GET)
	public @ResponseBody Room getRoom(@PathVariable("id") int id){
		return roomService.getRoom(id);
	}

}
