package com.adobe.theforce.dao;

import java.util.List;

import com.adobe.theforce.entity.Room;
import com.adobe.theforce.util.RoomLayout;

public interface RoomDao {
	List<Room> getRooms();
	Room getRoom(int id);
	void addRoom(Room r);
	void deleteRoom(int id);
	void updateRoom(Room room);
//	void addRoomLayout(RoomLayout roomlayout);
}
