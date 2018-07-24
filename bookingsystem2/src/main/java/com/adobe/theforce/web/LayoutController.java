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
import com.adobe.theforce.entity.ExceptionJSONInfo;
import com.adobe.theforce.entity.Layout;
import com.adobe.theforce.service.AdministratorService;

@RestController
public class LayoutController {
	
	@Autowired
	private AdministratorService layoutService;
	
	
	
	@RequestMapping(value = "/api/layouts",method = RequestMethod.GET)
	public @ResponseBody List<Layout> getLayouts() throws DaoException{
		
		try {
			return layoutService.getLayouts();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw new DaoException("Unable to get Layouts");
		}
	}
	
	@RequestMapping(value = "/api/layouts",method = RequestMethod.POST)
	public int addLayout(@RequestBody Layout r) throws DaoException{
		try {
			layoutService.addLayout(r);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw new DaoException("Unable to Add Layouts");
		}
		return r.getId();
	}
	
	@RequestMapping(value = "/api/layouts/{id}",method = RequestMethod.DELETE)
	public void deleteLayout(@PathVariable("id") int id) throws DaoException{
		try {
			layoutService.deleteLayout(id);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw new DaoException("Unable to Delete Layout with Id = "+  id);
		}
	}
	
	@RequestMapping(value = "/api/layouts/{id}",method = RequestMethod.PUT)
	public void updateLayout(@PathVariable("id") int id,@RequestBody Layout r) throws DaoException{
		try {
			layoutService.updateLayout(r);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw new DaoException("Unable to Update Layout with Id = "+  id);
		}
	}
	
	@RequestMapping(value = "/api/layouts/{id}",method = RequestMethod.GET)
	public @ResponseBody Layout getLayout(@PathVariable("id") int id) throws DaoException{
		try {
			return layoutService.getLayout(id);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw new DaoException("Unable to get Layout with Id = "+  id);
		}
	}

	@ExceptionHandler(DaoException.class)
	public @ResponseBody ExceptionJSONInfo handleDaoException(HttpServletRequest request, DaoException ex){
		
		ExceptionJSONInfo response = new ExceptionJSONInfo();
		response.setMessage(ex.getMessage());
		
		return response;
	}

}
