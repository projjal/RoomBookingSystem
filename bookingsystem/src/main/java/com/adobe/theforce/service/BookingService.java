package com.adobe.theforce.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.adobe.theforce.dao.RoomDao;
import com.adobe.theforce.entity.Room;


@Service
public class BookingService {
	
	
	@Autowired
	private RoomDao roomDao;
	
	public List<Room> getRooms(){
		return roomDao.getRooms();
	}
	public Room getRoom(int id){
		return roomDao.getRoom(id);
	}
	
	@Transactional
	public void addRoom(Room room){
		roomDao.addRoom(room);
	}
	
	@Transactional
	public void deleteRoom(int id){
		roomDao.deleteRoom(id);
	}
	
	@Transactional
	public void updateRoom(Room room){
		roomDao.updateRoom(room);
	}	
 }
