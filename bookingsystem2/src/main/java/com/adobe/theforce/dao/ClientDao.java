/**
 * 
 */
package com.adobe.theforce.dao;

import java.util.List;

import com.adobe.theforce.entity.Client;


/**
 * 
 * DAO interface corresponding to client entity
 *
 */
public interface ClientDao {
	List<Client> getClients() throws Exception;
	Client getClient(int id) throws Exception;
	void addClient(Client client) throws Exception;
	void deleteClient(int id) throws Exception;
	void updateClient(Client client) throws Exception;
}
