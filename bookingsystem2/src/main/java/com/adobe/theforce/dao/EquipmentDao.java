package com.adobe.theforce.dao;

import java.util.List;

import com.adobe.theforce.entity.Equipment;


/**
 * 
 * DAO interface corresponding to equipment entity
 *
 */
public interface EquipmentDao {
	List<Equipment> getEquipments() throws Exception;
	Equipment getEquipment(int id) throws Exception;
	void addEquipment(Equipment equipment) throws Exception;
	void deleteEquipment(int id) throws Exception;
	void updateEquipment(Equipment equipment) throws Exception;
}
