package com.adobe.theforce.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import com.adobe.theforce.entity.Equipment;
import com.adobe.theforce.entity.Room;

@Repository
public class EquipmentDaoImpl implements EquipmentDao {

	@PersistenceContext
	private EntityManager em;
	
	@Override
	public List<Equipment> getEquipments() {
		TypedQuery<Equipment> query = em.createQuery("SELECT e FROM Equipment e", Equipment.class);
		return query.getResultList();
	}

	@Override
	public Equipment getEquipment(int id) {
		return em.find(Equipment.class, id);
	}

	@Override
	public void addEquipment(Equipment equipment) {
		em.persist(equipment);

	}

	@Override
	public void deleteEquipment(int id) {
		Equipment e = em.find(Equipment.class, id);
		em.remove(e);

	}

	@Override
	public void updateEquipment(Equipment equipment) {
		em.merge(equipment);

	}

}
