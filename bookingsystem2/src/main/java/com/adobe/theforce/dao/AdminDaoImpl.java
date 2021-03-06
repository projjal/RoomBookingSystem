package com.adobe.theforce.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import com.adobe.theforce.entity.Admin;


/**
 * 
 * DAO implementation class for the interface corresponding to admin entity
 *
 */
@Repository
public class AdminDaoImpl implements AdminDao {


	@PersistenceContext
	private EntityManager em;


	@Override
	public List<Admin> getAdmins()  throws Exception{
		TypedQuery<Admin> query = em.createQuery("SELECT a FROM Admin a", Admin.class);
		return query.getResultList();
	}


	@Override
	public Admin getAdmin(int id)  throws Exception{

		return em.find(Admin.class, id);
	}

	@Override
	public void addAdmin(Admin admin)  throws Exception{
		em.persist(admin);

	}


	public void deleteAdmin(int id)  throws Exception{
		Admin a = em.find(Admin.class, id);
		em.remove(a);

	}

	@Override
	public void updateAdmin(Admin admin)  throws Exception{
		em.merge(admin);
	}

	@Override
	public Admin getAdmin(String emailID) throws Exception{
		TypedQuery<Admin> query = em.createQuery("SELECT a FROM Admin a WHERE a.emailID = :emailID", Admin.class);
		Admin a = query.setParameter("emailID", emailID).getSingleResult();
		return a;
	}

}
