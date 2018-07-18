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
		// TODO Auto-generated method stub
		TypedQuery<Admin> query = em.createQuery("SELECT a FROM Admin a", Admin.class);
		System.out.println("in Dao");
		return query.getResultList();
	}

	@Override
	public Admin getAdmin(int id) {
		// TODO Auto-generated method stub
		return em.find(Admin.class, id);
	}

	@Override
	public void addAdmin(Admin admin) {
		// TODO Auto-generated method stub
		em.persist(admin);

	}

	@Override
	public void deleteAdmin(int id) {
		// TODO Auto-generated method stub
		Admin a = em.find(Admin.class, id);
		em.remove(a);

	}

	@Override
	public void updateAdmin(Admin admin) {
		// TODO Auto-generated method stub
		em.merge(admin);
	}

}
