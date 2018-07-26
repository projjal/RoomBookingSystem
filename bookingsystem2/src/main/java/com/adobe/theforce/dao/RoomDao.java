package com.adobe.theforce.dao;

import java.util.List;

import com.adobe.theforce.entity.Room;
import com.adobe.theforce.exceptions.DaoException;

public interface RoomDao {
	List<Room> getRooms() ;
	Room getRoom(int id);
	void addRoom(Room r) throws DaoException;
	void deleteRoom(int id) throws Exception;
	void updateRoom(Room room) throws Exception;
}
