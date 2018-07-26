package com.adobe.theforce.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import com.adobe.theforce.entity.Room;
import com.adobe.theforce.exceptions.DaoException;

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

//	@Override
//	public void addRoom(RoomLayout roomlayout) {
//		Room room=roomlayout.getRoom();
//		em.persist(room);
//		int roomId=room.getId();
//		List<Integer> layoutId =roomlayout.getLayoutId();
//		
//		for(int id : layoutId){
//			Layout layout=(Layout)em.createQuery("SELECT l from Layout l where id="+id,Layout.class).getSingleResult();
//			LayoutLineItem layoutlineitem=new LayoutLineItem(0,layout,room);
//			em.persist(layoutlineitem);
//			}
//	}
	@Override
	public void addRoom(Room r) throws DaoException {
		
		try{
		em.persist(r);
		} catch (Exception e){
			throw new DaoException("Unable to add Room");
		}
	}

	@Override
	public void deleteRoom(int id) throws Exception {
		
		try{
		Room r = em.find(Room.class, id);
		em.remove(r);
		} catch(Exception e){
			throw e;
		}
	}

	@Override
	public void updateRoom(Room room) throws Exception {
		
		try{
		em.merge(room);
		} catch(Exception e){
			throw e;
		}
	}
	
//	@Override
//	public void addRoomLayout(RoomLayout roomlayout) {
//		int lid=roomlayout.getLayoutId();
//		int room_id=roomlayout.getRoomId();
//		Layout layout=(Layout)em.createQuery("SELECT l from Layout l where id="+lid,Layout.class).getSingleResult();
//		Room room=(Room)em.createQuery("SELECT r from Room r where id="+room_id,Room.class).getSingleResult();
//		LayoutLineItem layoutlineitem=new LayoutLineItem(0,layout,room);
//		em.persist(layoutlineitem);
//	}

}
