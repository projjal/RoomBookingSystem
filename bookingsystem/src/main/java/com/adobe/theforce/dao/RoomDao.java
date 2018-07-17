package com.adobe.theforce.dao;

import java.util.List;

import com.adobe.theforce.entity.Room;

public interface RoomDao {
	List<Room> getRooms();
	Room getRoom(int id);
	void addRoom(Room room);
	void deleteRoom(int id);
	void updateRoom(Room room);
}
