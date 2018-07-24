/**
 * 
 */
package com.adobe.theforce.service;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

import javax.persistence.TypedQuery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.adobe.theforce.dao.AdminDao;
import com.adobe.theforce.dao.BookingComparator;
import com.adobe.theforce.dao.BookingDao;
import com.adobe.theforce.dao.ClientDao;
import com.adobe.theforce.dao.DaoException;
import com.adobe.theforce.dao.EquipmentDao;
import com.adobe.theforce.dao.FoodDao;
import com.adobe.theforce.dao.LayoutDao;
import com.adobe.theforce.dao.RoomDao;
import com.adobe.theforce.entity.Admin;
import com.adobe.theforce.entity.Booking;
import com.adobe.theforce.entity.Client;
import com.adobe.theforce.entity.Equipment;
import com.adobe.theforce.entity.Food;
import com.adobe.theforce.entity.Layout;
import com.adobe.theforce.entity.Room;
import com.adobe.theforce.util.RoomLayout;

/**
 * @author vvashish
 *
 */

@Service
public class AdministratorService {

	/*
	 * Room related functions
	 */
	
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
	
//	@Transactional
//	public void addRoomLayout(RoomLayout roomlayout) {
//		roomDao.addRoomLayout(roomlayout);
//	}
	/*
	 * Booking related functions
	 * 
	 */
	
	@Autowired
	private BookingDao bookingDao;
	
	@Transactional
	public void addBooking(Booking booking)  throws Exception{
		bookingDao.addBooking(booking);
	}
	
	public List<Booking> getBookings()  throws Exception{
		return bookingDao.getBookings();
	}
	
	public Booking getBooking(int id)  throws Exception{
		return bookingDao.getBooking(id);
	}
	
	@Transactional
	public void deleteBooking(int id)  throws Exception{
		bookingDao.deleteBooking(id);
	}
	
	@Transactional
	public void updateBooking(Booking booking)  throws Exception{
		bookingDao.updateBooking(booking);
	}
	
	/*
	 * Latest 3 bookings for the dashboard
	 */
	
	public List<Booking> getLatestBookings()  throws Exception{
		List<Booking> b = bookingDao.getBookings();
		b.sort(new BookingComparator());
		List<Booking> result = new ArrayList<Booking>();
		int i = 0;
		System.out.println(b.size());
		while(i<3 && i<b.size()){
			result.add(b.get(i++));
		}
		return result;
	}
	
	/*
	 * Number of Bookings made today
	 */
	
	public int getTodaysBookings()  throws Exception{
		int count = 0;
		Calendar today = Calendar.getInstance();
		today.set(Calendar.HOUR_OF_DAY, 0);
		List<Booking> b = bookingDao.getBookings();
		for(Booking i : b){
			if(i.getBookingDate() == today.getTime())
				count++;
		}
		return count;
	}
	
	/*
	 * Number of bookings for today
	 */
	
	
	/*
	 * Total number of bookings
	 */
	
	public int getTotalBookings()  throws Exception{
		return bookingDao.getBookings().size();
	}
	
	/*
	 * Client related functions
	 */
	
	@Autowired
	private ClientDao clientDao;
	
	public List<Client> getClients()  throws Exception{
		return clientDao.getClients();
	}
	public Client getClient(int id)  throws Exception{
		return clientDao.getClient(id);
	}
	
	@Transactional
	public void addClient(Client client)  throws Exception{
		clientDao.addClient(client);
	}
	
	@Transactional
	public void deleteClient(int id)  throws Exception{
		clientDao.deleteClient(id);
	}
	
	@Transactional
	public void updateClient(Client client)  throws Exception{
		clientDao.updateClient(client);
	}
	
	/*
	 * Equipment related functions
	 */
	
	@Autowired
	private EquipmentDao equipmentDao;
	
	public List<Equipment> getEquipments()  throws Exception{
		return equipmentDao.getEquipments();
	}
	public Equipment getEquipment(int id)  throws Exception{
		return equipmentDao.getEquipment(id);
	}
	
	@Transactional
	public void addEquipment(Equipment equipment)  throws Exception{
		equipmentDao.addEquipment(equipment);
	}
	
	@Transactional
	public void deleteEquipment(int id)  throws Exception{
		equipmentDao.deleteEquipment(id);
	}
	
	@Transactional
	public void updateEquipment(Equipment equipment)  throws Exception{
		equipmentDao.updateEquipment(equipment);
	}
	
	/*
	 * Food related functions
	 */
	
	@Autowired
	private FoodDao foodDao;
	
	public List<Food> getFoods()  throws Exception{
		return foodDao.getFoods();
	}
	public Food getFood(int id)  throws Exception{
		return foodDao.getFood(id);
	}
	
	@Transactional
	public void addFood(Food food)  throws Exception{
		foodDao.addFood(food);
	}
	
	@Transactional
	public void deleteFood(int id)  throws Exception{
		foodDao.deleteFood(id);
	}
	
	@Transactional
	public void updateFood(Food food)  throws Exception{
		foodDao.updateFood(food);
	}
	
	/*
	 * Layout related functions
	 */
	
	@Autowired
	private LayoutDao layoutDao;
	
	public List<Layout> getLayouts() throws Exception{
		try {
		return layoutDao.getLayouts();
		} catch (Exception e){
			throw e;
		}
	}

	public Layout getLayout(int id) throws Exception{
		try{
		return layoutDao.getLayout(id);
		} catch (Exception e){
			throw e;
		}
	}

	@Transactional
	public void addLayout(Layout layout) throws Exception{
		try{
		layoutDao.addLayout(layout);
		} catch (Exception e){
			throw e;
		}
	}

	@Transactional
	public void deleteLayout(int id) throws Exception{
		try{
		layoutDao.deleteLayout(id);
		} catch (Exception e){
			throw e;
		}
	}
	
	@Transactional
	public void updateLayout(Layout layout) throws Exception{
		try{
		layoutDao.updateLayout(layout);
		} catch (Exception e){
			throw e;
		}
	}
	
	/*
	 * Admin related functions
	 */
	
	@Autowired
	private AdminDao adminDao;
	
	public List<Admin> getAdmins()  throws Exception{
		System.out.println("here");
		return adminDao.getAdmins();
	}
	public Admin getAdmin(int id)  throws Exception{
		return adminDao.getAdmin(id);
	}
	
	@Transactional
	public void addAdmin(Admin admin)  throws Exception{
		adminDao.addAdmin(admin);
	}
	
	@Transactional
	public void deleteAdmin(int id)  throws Exception{
		adminDao.deleteAdmin(id);
	}
	
	@Transactional
	public void updateAdmin(Admin admin)  throws Exception{
		adminDao.updateAdmin(admin);
	}	
	
	@Transactional
	public Admin getAdmin(String id) throws Exception{
		return adminDao.getAdmin(id);
	}
}
