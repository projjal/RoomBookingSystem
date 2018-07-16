package com.adobe.prj.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import com.adobe.prj.entity.Restaurant;

@Repository
public class RestaurantDaoJpaImpl implements RestaurantDao {

	@PersistenceContext
	private EntityManager em;
	
	@Override
	public void addRestaurant(Restaurant restaurant) {
		em.persist(restaurant);
	}

	@Override
	public List<Restaurant> getRestaurants() {
		TypedQuery<Restaurant> query = em.createQuery("SELECT r FROM Restaurant r",Restaurant.class);
		return query.getResultList();
	}

	@Override
	public Restaurant getRestaurant(int id) {
		return em.find(Restaurant.class, id);
	}

	@Override
	public void deleteRestaurant(int id) {
		Restaurant r = em.find(Restaurant.class, id);
		em.remove(r);
	}

	@Override
	public void updateRestaurant(Restaurant restaurant) {
		em.merge(restaurant);
	}

}
