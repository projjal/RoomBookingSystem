package com.adobe.theforce.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import com.adobe.theforce.entity.Room;

@Repository
public class RoomDaoImpl implements RoomDao {

	@PersistenceContext
	private EntityManager em;
	
	@Override
	public List<Room> getRooms() {
		TypedQuery<Room> query = em.createQuery("SELECT r FROM Room r", Room.class);
		return query.getResultList();
	}

	@Override
	public Room getRoom(int id) {
		return em.find(Room.class, id);
	}

	@Override
	public void addRoom(Room room) {
		em.persist(room);
	}

	@Override
	public void deleteRoom(int id) {
		Room r = em.find(Room.class, id);
		em.remove(r);
	}

	@Override
	public void updateRoom(Room room) {
		em.merge(room);
	}

}
