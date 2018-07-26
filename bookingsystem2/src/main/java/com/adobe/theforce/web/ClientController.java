/**
 * 
 */
package com.adobe.theforce.web;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.adobe.theforce.entity.Client;
import com.adobe.theforce.exceptions.DaoException;
import com.adobe.theforce.service.ClientService;

/**
 * 
 * Controller class corresponding to client entity
 *
 */
@RestController
public class ClientController {
	@Autowired
	private ClientService clientService;


	@RequestMapping(value = "/api/clients",method = RequestMethod.GET)
	public @ResponseBody List<Client> getClients()  throws DaoException{
		try{
			return clientService.getClients();
		} catch (Exception e) {
			throw new DaoException("Unable to get Clients");
		}
	}

	@RequestMapping(value = "/api/clients",method = RequestMethod.POST)
	public int addClient(@RequestBody Client r)  throws DaoException{
		try{
			clientService.addClient(r);
			return r.getId();
		} catch (Exception e) {
			throw new DaoException("Unable to Add Clients");
		}
	}

	@RequestMapping(value = "/api/clients/{id}",method = RequestMethod.DELETE)
	public void deleteClient(@PathVariable("id") int id)  throws DaoException{
		try{
			clientService.deleteClient(id);
		} catch (Exception e) {
			throw new DaoException("Unable to Delete clients");
		}
	}

	@RequestMapping(value = "/api/clients/{id}",method = RequestMethod.PUT)
	public void updateClient(@PathVariable("id") int id,@RequestBody Client r)  throws DaoException{
		try{
			clientService.updateClient(r);
		} catch (Exception e) {
			throw new DaoException("Unable to Update Clients");
		}
	}

	@RequestMapping(value = "/api/clients/{id}",method = RequestMethod.GET)
	public @ResponseBody Client getClient(@PathVariable("id") int id)  throws DaoException{
		try{
			return clientService.getClient(id);
		} catch (Exception e) {
			throw new DaoException("Unable to get Client with Id = " + id);
		}
	}

	@ExceptionHandler(DaoException.class)
	@ResponseBody
	public ResponseEntity handleDaoException(HttpServletRequest request, DaoException ex){
		return new ResponseEntity(HttpStatus.BAD_REQUEST);

	}

}
