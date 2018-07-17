package com.adobe.theforce.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.adobe.theforce.dao.EquipmentDao;
import com.adobe.theforce.entity.Equipment;

@Service
public class EquipmentService {
	
	@Autowired
	private EquipmentDao equipmentDao;
	
	public List<Equipment> getEquipments(){
		return equipmentDao.getEquipments();
	}
	public Equipment getEquipment(int id){
		return equipmentDao.getEquipment(id);
	}
	
	@Transactional
	public void addEquipment(Equipment equipment){
		equipmentDao.addEquipment(equipment);
	}
	
	@Transactional
	public void deleteEquipment(int id){
		equipmentDao.deleteEquipment(id);
	}
	
	@Transactional
	public void updateEquipment(Equipment equipment){
		equipmentDao.updateEquipment(equipment);
	}	

}
