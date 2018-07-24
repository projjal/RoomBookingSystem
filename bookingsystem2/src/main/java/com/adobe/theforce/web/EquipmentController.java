package com.adobe.theforce.web;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.adobe.theforce.dao.DaoException;
import com.adobe.theforce.entity.Equipment;
import com.adobe.theforce.entity.ExceptionJSONInfo;
import com.adobe.theforce.service.EquipmentService;

@RestController
public class EquipmentController {
	@Autowired
	private EquipmentService equipmentService;
	
	
	@RequestMapping(value = "/api/equipments",method = RequestMethod.GET)
	public @ResponseBody List<Equipment> getEquipments()  throws DaoException{
		try{
		return equipmentService.getEquipments();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw new DaoException("Unable to Get Equipments");
		}
	}
	
	@RequestMapping(value = "/api/equipments",method = RequestMethod.POST)
	public int addEquipment(@RequestBody Equipment e) throws DaoException{
		try{
		equipmentService.addEquipment(e);
		} catch (Exception ex) {
			// TODO Auto-generated catch block
			throw new DaoException("Unable to add Equipment");
		}
		return e.getId();
	}
	
	@RequestMapping(value = "/api/equipments/{id}",method = RequestMethod.DELETE)
	public void deleteEquipment(@PathVariable("id") int id) throws DaoException{
		try{
		equipmentService.deleteEquipment(id);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw new DaoException("Unable to Delete Equipment with Id = " + id);
		}
	}
	
	@RequestMapping(value = "/api/equipments/{id}",method = RequestMethod.PUT)
	public void updateEquipment(@PathVariable("id") int id,@RequestBody Equipment e) throws DaoException{
		try{
		equipmentService.updateEquipment(e);
		} catch (Exception ex) {
			// TODO Auto-generated catch block
			throw new DaoException("Unable to update Equipment with Id = " + id);
		}
	}
	
	@RequestMapping(value = "/api/equipments/{id}",method = RequestMethod.GET)
	public @ResponseBody Equipment getEquipment(@PathVariable("id") int id) throws DaoException{
		try{
		return equipmentService.getEquipment(id);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw new DaoException("Unable to get Equipment with Id = " + id);
		}
	}
	
	@ExceptionHandler(DaoException.class)
	public @ResponseBody ExceptionJSONInfo handleDaoException(HttpServletRequest request, DaoException ex){
		
		ExceptionJSONInfo response = new ExceptionJSONInfo();
		response.setMessage(ex.getMessage());
		
		return response;
	}

}
