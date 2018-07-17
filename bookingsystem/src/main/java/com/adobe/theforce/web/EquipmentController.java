package com.adobe.theforce.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.adobe.theforce.entity.Equipment;

import com.adobe.theforce.service.EquipmentService;

@RestController
public class EquipmentController {
	@Autowired
	private EquipmentService equipmentService;
	
	
	@RequestMapping(value = "/api/equipments",method = RequestMethod.GET)
	public @ResponseBody List<Equipment> getEquipments(){
		return equipmentService.getEquipments();
	}
	
	@RequestMapping(value = "/api/equipments",method = RequestMethod.POST)
	public void addEquipment(@RequestBody Equipment e){
		equipmentService.addEquipment(e);
	}
	
	@RequestMapping(value = "/api/equipments/{id}",method = RequestMethod.DELETE)
	public void deleteEquipment(@PathVariable("id") int id){
		equipmentService.deleteEquipment(id);
	}
	
	@RequestMapping(value = "/api/equipments/{id}",method = RequestMethod.PUT)
	public void updateEquipment(@PathVariable("id") int id,@RequestBody Equipment e){
		equipmentService.updateEquipment(e);
	}
	
	@RequestMapping(value = "/api/equipments/{id}",method = RequestMethod.GET)
	public @ResponseBody Equipment getEquipment(@PathVariable("id") int id){
		return equipmentService.getEquipment(id);
	}

}
