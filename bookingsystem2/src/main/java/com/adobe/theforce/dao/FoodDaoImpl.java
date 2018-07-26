/**
 * 
 */
package com.adobe.theforce.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import com.adobe.theforce.entity.Food;

/**
 * 
 * DAO implementation class for the interface corresponding to food entity
 *
 */
@Repository
public class FoodDaoImpl implements FoodDao {

	@PersistenceContext
	private EntityManager em;

	/* (non-Javadoc)
	 * @see com.adobe.theforce.dao.FoodDao#getFoods()
	 */
	@Override
	public List<Food> getFoods()  throws Exception{
		TypedQuery<Food> query = em.createQuery("SELECT r FROM Food r", Food.class);
		try{
			return query.getResultList();
		} catch (Exception e){
			throw e;
		}

	}

	/* (non-Javadoc)
	 * @see com.adobe.theforce.dao.FoodDao#getFood(int)
	 */
	@Override
	public Food getFood(int id)  throws Exception{
		try{
			return em.find(Food.class, id);
		} catch (Exception e){
			throw e;
		}
	}

	/* (non-Javadoc)
	 * @see com.adobe.theforce.dao.FoodDao#addFood(com.adobe.theforce.entity.Food)
	 */
	@Override
	public void addFood(Food food)  throws Exception{
		try{
			em.persist(food);
		} catch (Exception e){
			throw e;
		}
	}

	/* (non-Javadoc)
	 * @see com.adobe.theforce.dao.FoodDao#deleteFood(int)
	 */
	@Override
	public void deleteFood(int id)  throws Exception{
		try{
			Food r = em.find(Food.class, id);
			em.remove(r);
		} catch (Exception e){
			throw e;
		}
	}

	/* (non-Javadoc)
	 * @see com.adobe.theforce.dao.FoodDao#updateFood(com.adobe.theforce.entity.Food)
	 */
	@Override
	public void updateFood(Food food)  throws Exception {
		try{
			em.merge(food);
		} catch (Exception e){
			throw e;
		}
	}

}
