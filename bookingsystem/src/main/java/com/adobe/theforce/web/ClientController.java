/**
 * 
 */
package com.adobe.theforce.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.adobe.theforce.entity.Client;
import com.adobe.theforce.service.ClientService;

/**
 * @author pchanda
 *
 */
@RestController
public class ClientController {
	@Autowired
	private ClientService clientService;
	
	
	@RequestMapping(value = "/api/clients",method = RequestMethod.GET)
	public @ResponseBody List<Client> getClients(){
		return clientService.getClients();
	}
	
	@RequestMapping(value = "/api/clients",method = RequestMethod.POST)
	public void addClient(@RequestBody Client r){
		clientService.addClient(r);
	}
	
	@RequestMapping(value = "/api/clients/{id}",method = RequestMethod.DELETE)
	public void deleteClient(@PathVariable("id") int id){
		clientService.deleteClient(id);
	}
	
	@RequestMapping(value = "/api/clients/{id}",method = RequestMethod.PUT)
	public void updateClient(@PathVariable("id") int id,@RequestBody Client r){
		clientService.updateClient(r);
	}
	
	@RequestMapping(value = "/api/clients/{id}",method = RequestMethod.GET)
	public @ResponseBody Client getClient(@PathVariable("id") int id){
		return clientService.getClient(id);
	}
}
