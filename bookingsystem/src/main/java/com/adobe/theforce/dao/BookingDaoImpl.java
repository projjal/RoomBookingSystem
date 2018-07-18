package com.adobe.theforce.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import com.adobe.theforce.entity.Booking;

@Repository
public class BookingDaoImpl implements BookingDao {
	
	@PersistenceContext
	private EntityManager em;

	@Override
	public void addBooking(Booking booking) {
		em.persist(booking);
	}

	@Override
	public List<Booking> getBookings() {
		TypedQuery<Booking> query = em.createQuery("SELECT b FROM Booking b", Booking.class);
		return query.getResultList();
	}

	@Override
	public Booking getBooking(int id) {
		return em.find(Booking.class, id);
	}

	@Override
	public void deleteBooking(int id) {
		Booking b = em.find(Booking.class, id);
		em.remove(b);
	}

	@Override
	public void updateBooking(Booking booking) {
		em.merge(booking);
	}

}