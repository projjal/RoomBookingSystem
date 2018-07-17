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
 * @author pchanda
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
	public List<Food> getFoods() {
		TypedQuery<Food> query = em.createQuery("SELECT r FROM Food r", Food.class);
		return query.getResultList();
	}

	/* (non-Javadoc)
	 * @see com.adobe.theforce.dao.FoodDao#getFood(int)
	 */
	@Override
	public Food getFood(int id) {
		return em.find(Food.class, id);
	}

	/* (non-Javadoc)
	 * @see com.adobe.theforce.dao.FoodDao#addFood(com.adobe.theforce.entity.Food)
	 */
	@Override
	public void addFood(Food food) {
		em.persist(food);
	}

	/* (non-Javadoc)
	 * @see com.adobe.theforce.dao.FoodDao#deleteFood(int)
	 */
	@Override
	public void deleteFood(int id) {
		Food r = em.find(Food.class, id);
		em.remove(r);
	}

	/* (non-Javadoc)
	 * @see com.adobe.theforce.dao.FoodDao#updateFood(com.adobe.theforce.entity.Food)
	 */
	@Override
	public void updateFood(Food food) {
		em.merge(food);
	}

}
