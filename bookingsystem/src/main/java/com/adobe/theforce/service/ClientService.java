/**
 * 
 */
package com.adobe.theforce.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.adobe.theforce.dao.ClientDao;
import com.adobe.theforce.entity.Client;

/**
 * @author pchanda
 *
 */
@Service
public class ClientService {
	@Autowired
	private ClientDao clientDao;
	
	public List<Client> getClients(){
		return clientDao.getClients();
	}
	public Client getClient(int id){
		return clientDao.getClient(id);
	}
	
	@Transactional
	public void addClient(Client client){
		clientDao.addClient(client);
	}
	
	@Transactional
	public void deleteClient(int id){
		clientDao.deleteClient(id);
	}
	
	@Transactional
	public void updateClient(Client client){
		clientDao.updateClient(client);
	}
}
