package com.adobe.theforce.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import com.adobe.theforce.entity.Admin;

@Repository
public class AdminDaoImpl implements AdminDao {

	
	@PersistenceContext
	private EntityManager em;
	
	
	@Override
	public List<Admin> getAdmins() {
		TypedQuery<Admin> query = em.createQuery("SELECT a FROM Admin a", Admin.class);
		return query.getResultList();
	}

	@Override
	public Admin getAdmin(String id) {
		return em.find(Admin.class, id);
	}

	@Override
	public void addAdmin(Admin admin) {
		em.persist(admin);

	}

	@Override
	public void deleteAdmin(String id) {
		Admin a = em.find(Admin.class, id);
		em.remove(a);

	}

	@Override
	public void updateAdmin(Admin admin) {
		em.merge(admin);
	}

}
