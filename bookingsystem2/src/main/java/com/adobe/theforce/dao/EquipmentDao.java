package com.adobe.theforce.dao;

import java.util.List;

import com.adobe.theforce.entity.Equipment;


public interface EquipmentDao {
	List<Equipment> getEquipments();
	Equipment getEquipment(int id);
	void addEquipment(Equipment equipment);
	void deleteEquipment(int id);
	void updateEquipment(Equipment equipment);
}
