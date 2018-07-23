package com.adobe.theforce.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import com.adobe.theforce.entity.Layout;

@Repository
public class LayoutDaoImpl implements LayoutDao {
	
	@PersistenceContext
	private EntityManager em;

	@Override
	public List<Layout> getLayouts() {
		TypedQuery<Layout> query = em.createQuery("SELECT r FROM Layout r", Layout.class);
		return query.getResultList();
	}

	@Override
	public Layout getLayout(int id) {
		return em.find(Layout.class, id);
	}

	@Override
	public void addLayout(Layout layout) {
		em.persist(layout);
	}

	@Override
	public void deleteLayout(int id) {
		Layout l = em.find(Layout.class, id);
		em.remove(l);
	}

	@Override
	public void updateLayout(Layout layout) {
		em.merge(layout);
	}

}
