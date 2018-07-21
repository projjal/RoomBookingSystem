/**
 * 
 */
package com.adobe.theforce.dao;

import java.util.List;

import com.adobe.theforce.entity.Client;


/**
 * @author pchanda
 *
 */
public interface ClientDao {
	List<Client> getClients();
	Client getClient(int id);
	void addClient(Client client);
	void deleteClient(int id);
	void updateClient(Client client);
}
