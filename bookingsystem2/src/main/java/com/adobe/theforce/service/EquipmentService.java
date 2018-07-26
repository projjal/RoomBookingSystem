package com.adobe.theforce.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.adobe.theforce.dao.EquipmentDao;
import com.adobe.theforce.entity.Equipment;


/**
 * 
 * Service class for Equipment entity
 *
 */
@Service
public class EquipmentService {
	@Autowired
	private EquipmentDao equipmentDao;

	public List<Equipment> getEquipments()  throws Exception{
		return equipmentDao.getEquipments();
	}
	public Equipment getEquipment(int id)  throws Exception{
		return equipmentDao.getEquipment(id);
	}

	@Transactional
	public void addEquipment(Equipment equipment)  throws Exception{
		equipmentDao.addEquipment(equipment);
	}

	@Transactional
	public void deleteEquipment(int id)  throws Exception{
		equipmentDao.deleteEquipment(id);
	}

	@Transactional
	public void updateEquipment(Equipment equipment)  throws Exception{
		equipmentDao.updateEquipment(equipment);
	}

}
