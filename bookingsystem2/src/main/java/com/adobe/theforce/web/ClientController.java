/**
 * 
 */
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
import com.adobe.theforce.entity.Client;
import com.adobe.theforce.entity.ExceptionJSONInfo;
import com.adobe.theforce.service.AdministratorService;

/**
 * @author pchanda
 *
 */
@RestController
public class ClientController {
	@Autowired
	private AdministratorService clientService;
	
	
	@RequestMapping(value = "/api/clients",method = RequestMethod.GET)
	public @ResponseBody List<Client> getClients()  throws DaoException{
		try{
		return clientService.getClients();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw new DaoException("Unable to get Clients");
		}
	}
	
	@RequestMapping(value = "/api/clients",method = RequestMethod.POST)
	public int addClient(@RequestBody Client r)  throws DaoException{
		try{
		clientService.addClient(r);
		return r.getId();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw new DaoException("Unable to Add Clients");
		}
	}
	
	@RequestMapping(value = "/api/clients/{id}",method = RequestMethod.DELETE)
	public void deleteClient(@PathVariable("id") int id)  throws DaoException{
		try{
		clientService.deleteClient(id);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw new DaoException("Unable to Delete clients");
		}
	}
	
	@RequestMapping(value = "/api/clients/{id}",method = RequestMethod.PUT)
	public void updateClient(@PathVariable("id") int id,@RequestBody Client r)  throws DaoException{
		try{
		clientService.updateClient(r);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw new DaoException("Unable to Update Clients");
		}
	}
	
	@RequestMapping(value = "/api/clients/{id}",method = RequestMethod.GET)
	public @ResponseBody Client getClient(@PathVariable("id") int id)  throws DaoException{
		try{
		return clientService.getClient(id);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw new DaoException("Unable to get Client with Id = " + id);
		}
	}
	
	@ExceptionHandler(DaoException.class)
	public @ResponseBody ExceptionJSONInfo handleDaoException(HttpServletRequest request, DaoException ex){
		
		ExceptionJSONInfo response = new ExceptionJSONInfo();
		response.setMessage(ex.getMessage());
		
		return response;
	}

}
