package com.adobe.theforce.web;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


import com.adobe.theforce.entity.Room;
import com.adobe.theforce.exceptions.DaoException;
import com.adobe.theforce.service.RoomService;


/**
 * 
 * Controller class corresponding to room entity
 *
 */
@RestController
public class RoomController {

	@Autowired
	private RoomService roomService;


	@RequestMapping(value = "/api/rooms",method = RequestMethod.GET)
	public @ResponseBody List<Room> getRooms(){

		List<Room> rooms;
		try{
			rooms =  roomService.getRooms();
		} catch (Exception e){
			throw e;
		}
		return rooms;
	}

	@RequestMapping(value = "/api/rooms",method = RequestMethod.POST)
	public void addRoom(@RequestBody Room r) throws DaoException {
		System.out.println("Controller1");
		try {
			roomService.addRoom(r);
		} catch (Exception e) {
			throw new DaoException("Unable to Add Room");
		}
	}

	@RequestMapping(value = "/api/rooms/{id}",method = RequestMethod.DELETE)
	public void deleteRoom(@PathVariable("id") int id) throws DaoException {

		try {
			roomService.deleteRoom(id);
		} catch (Exception e) {
			throw new DaoException("Unable to Delete Room");
		}
	}

	@RequestMapping(value = "/api/rooms/{id}",method = RequestMethod.PUT)
	public void updateRoom(@PathVariable("id") int id,@RequestBody Room r) throws DaoException{

		try {
			roomService.updateRoom(r);
		} catch (Exception e) {
			throw new DaoException("Unable to update room");
		}
	}

	@RequestMapping(value = "/api/rooms/{id}",method = RequestMethod.GET)
	public @ResponseBody Room getRoom(@PathVariable("id") int id) throws DaoException {

		return roomService.getRoom(id);
	}

	@ExceptionHandler(DaoException.class)
	@ResponseBody
	public ResponseEntity handleDaoException(HttpServletRequest request, DaoException ex){
		return new ResponseEntity(HttpStatus.BAD_REQUEST);

	}

}
