package com.adobe.theforce.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import com.adobe.theforce.entity.Layout;


/**
 * 
 * DAO implementation class for the interface corresponding to layout entity
 *
 */
@Repository
public class LayoutDaoImpl implements LayoutDao {

	@PersistenceContext
	private EntityManager em;

	@Override
	public List<Layout> getLayouts() throws Exception {
		TypedQuery<Layout> query = em.createQuery("SELECT r FROM Layout r", Layout.class);
		try{
			return query.getResultList();
		} catch (Exception e){
			throw e;
		}
	}

	@Override
	public Layout getLayout(int id) throws Exception {
		try{
			return em.find(Layout.class, id);
		} catch (Exception e){
			throw e;
		}
	}

	@Override
	public void addLayout(Layout layout) throws Exception {
		try{
			em.persist(layout);
		} catch (Exception e){
			throw e;
		}
	}

	@Override
	public void deleteLayout(int id) throws Exception {
		try{
			Layout l = em.find(Layout.class, id);
			em.remove(l);
		} catch (Exception e){
			throw e;
		}
	}

	@Override
	public void updateLayout(Layout layout) throws Exception {
		try{
			em.merge(layout);
		} catch (Exception e){
			throw e;
		}
	}

}
