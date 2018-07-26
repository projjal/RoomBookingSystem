package com.adobe.theforce.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.adobe.theforce.dao.RoomDao;
import com.adobe.theforce.entity.Room;
import com.adobe.theforce.exceptions.DaoException;

@Service
public class RoomService {
	@Autowired
	private RoomDao roomDao;
	
	public List<Room> getRooms(){
		return roomDao.getRooms();
	}
	public Room getRoom(int id){
		return roomDao.getRoom(id);
	}
	
	@Transactional
	public void addRoom(Room r) throws Exception {
		
		try {
			roomDao.addRoom(r);
		} catch (DaoException e) {
			// TODO Auto-generated catch block
			System.out.println("In Service" + e.getMessage());
			throw e;
		}
	}
	
	@Transactional
	public void deleteRoom(int id) throws Exception{
		
		try{
		roomDao.deleteRoom(id);
		} catch(Exception e){
			throw e;
		}
	}
	
	@Transactional
	public void updateRoom(Room room) throws Exception {
		
		try {
			roomDao.updateRoom(room);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw e;
		}
	}

}
