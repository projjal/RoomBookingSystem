/**
 * 
 */
package com.adobe.theforce.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.adobe.theforce.dao.BookingDao;
import com.adobe.theforce.dao.ClientDao;
import com.adobe.theforce.dao.EquipmentDao;
import com.adobe.theforce.dao.FoodDao;
import com.adobe.theforce.dao.LayoutDao;
import com.adobe.theforce.dao.RoomDao;
import com.adobe.theforce.entity.Booking;
import com.adobe.theforce.entity.Client;
import com.adobe.theforce.entity.Equipment;
import com.adobe.theforce.entity.Food;
import com.adobe.theforce.entity.Layout;
import com.adobe.theforce.entity.Room;

/**
 * 
 * Service class to perform user operations
 *
 */

@Service
public class UserService {

	@Autowired
	private RoomDao roomDao;

	public List<Room> getRooms(){
		return roomDao.getRooms();
	}
	public Room getRoom(int id){
		return roomDao.getRoom(id);
	}



	@Autowired
	private EquipmentDao equipmentDao;

	public List<Equipment> getEquipments()  throws Exception{
		return equipmentDao.getEquipments();
	}
	public Equipment getEquipment(int id)  throws Exception{
		return equipmentDao.getEquipment(id);
	}

	@Autowired
	private FoodDao foodDao;

	public List<Food> getFoods() throws Exception{
		return foodDao.getFoods();
	}
	public Food getFood(int id)  throws Exception{
		return foodDao.getFood(id);
	}

	@Autowired
	private LayoutDao layoutDao;

	public List<Layout> getLayouts() throws Exception{
		return layoutDao.getLayouts();
	}

	public Layout getLayout(int id) throws Exception{
		return layoutDao.getLayout(id);
	}

	@Autowired
	private ClientDao clientDao;

	@Transactional
	public void addClient(Client client)  throws Exception{
		clientDao.addClient(client);
	}

	@Autowired
	private BookingDao bookingDao;

	@Transactional
	public void addBooking(Booking booking)  throws Exception{
		bookingDao.addBooking(booking);
	}
}
