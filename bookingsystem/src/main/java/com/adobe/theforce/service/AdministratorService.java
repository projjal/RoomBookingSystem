/**
 * 
 */
package com.adobe.theforce.service;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.adobe.theforce.dao.AdminDao;
import com.adobe.theforce.dao.BookingComparator;
import com.adobe.theforce.dao.BookingDao;
import com.adobe.theforce.dao.ClientDao;
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
	
	/*
	 * Booking related functions
	 * 
	 */
	
	@Autowired
	private BookingDao bookingDao;
	
	@Transactional
	public void addBooking(Booking booking){
		bookingDao.addBooking(booking);
	}
	
	public List<Booking> getBookings(){
		return bookingDao.getBookings();
	}
	
	public Booking getBooking(int id){
		return bookingDao.getBooking(id);
	}
	
	@Transactional
	public void deleteBooking(int id){
		bookingDao.deleteBooking(id);
	}
	
	@Transactional
	public void updateBooking(Booking booking){
		bookingDao.updateBooking(booking);
	}
	
	/*
	 * Latest 3 bookings for the dashboard
	 */
	
	public List<Booking> getLatestBookings(){
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
	
	public int getTodaysBookings(){
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
	
	public int getTotalBookings(){
		return bookingDao.getBookings().size();
	}
	
	/*
	 * Client related functions
	 */
	
	@Autowired
	private ClientDao clientDao;
	
	public List<Client> getClients(){
		return clientDao.getClients();
	}
	public Client getClient(int id){
		return clientDao.getClient(id);
	}
	
	@Transactional
	public void addClient(Client client){
		clientDao.addClient(client);
	}
	
	@Transactional
	public void deleteClient(int id){
		clientDao.deleteClient(id);
	}
	
	@Transactional
	public void updateClient(Client client){
		clientDao.updateClient(client);
	}
	
	/*
	 * Equipment related functions
	 */
	
	@Autowired
	private EquipmentDao equipmentDao;
	
	public List<Equipment> getEquipments(){
		return equipmentDao.getEquipments();
	}
	public Equipment getEquipment(int id){
		return equipmentDao.getEquipment(id);
	}
	
	@Transactional
	public void addEquipment(Equipment equipment){
		equipmentDao.addEquipment(equipment);
	}
	
	@Transactional
	public void deleteEquipment(int id){
		equipmentDao.deleteEquipment(id);
	}
	
	@Transactional
	public void updateEquipment(Equipment equipment){
		equipmentDao.updateEquipment(equipment);
	}
	
	/*
	 * Food related functions
	 */
	
	@Autowired
	private FoodDao foodDao;
	
	public List<Food> getFoods(){
		return foodDao.getFoods();
	}
	public Food getFood(int id){
		return foodDao.getFood(id);
	}
	
	@Transactional
	public void addFood(Food food){
		foodDao.addFood(food);
	}
	
	@Transactional
	public void deleteFood(int id){
		foodDao.deleteFood(id);
	}
	
	@Transactional
	public void updateFood(Food food){
		foodDao.updateFood(food);
	}
	
	/*
	 * Layout related functions
	 */
	
	@Autowired
	private LayoutDao layoutDao;
	
	public List<Layout> getLayouts() {
		return layoutDao.getLayouts();
	}

	public Layout getLayout(int id) {
		return layoutDao.getLayout(id);
	}

	@Transactional
	public void addLayout(Layout layout) {
		layoutDao.addLayout(layout);
	}

	@Transactional
	public void deleteLayout(int id) {
		layoutDao.deleteLayout(id);
	}
	
	@Transactional
	public void updateLayout(Layout layout) {
		layoutDao.updateLayout(layout);
	}
	
	/*
	 * Admin related functions
	 */
	
	@Autowired
	private AdminDao adminDao;
	
	public List<Admin> getAdmins(){
		return adminDao.getAdmins();
	}
	public Admin getAdmin(String id){
		return adminDao.getAdmin(id);
	}
	
	@Transactional
	public void addAdmin(Admin admin){
		adminDao.addAdmin(admin);
	}
	
	@Transactional
	public void deleteAdmin(String id){
		adminDao.deleteAdmin(id);
	}
	
	@Transactional
	public void updateAdmin(Admin admin){
		adminDao.updateAdmin(admin);
	}	

}
