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

	public void addLayout(Layout layout) {
		layoutDao.addLayout(layout);
	}

	public void deleteLayout(int id) {
		layoutDao.deleteLayout(id);
	}

	public void updateLayout(Layout layout) {
		layoutDao.updateLayout(layout);
	}
}
