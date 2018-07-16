package com.adobe.prj.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import com.adobe.prj.entity.Order;


@Repository
public class OrderDaoJpaImpl implements OrderDao {

	@PersistenceContext
	private EntityManager em;
	
	@Override
	public List<Order> getOrders() {
		TypedQuery<Order> query = em.createQuery("SELECT o FROM Order o", Order.class);
		return query.getResultList();
	}

	@Override
	public void placeOrder(Order order) {
		em.persist(order);
	}

}
