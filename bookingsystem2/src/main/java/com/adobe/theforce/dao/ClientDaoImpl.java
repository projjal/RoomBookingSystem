package com.adobe.theforce.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import com.adobe.theforce.entity.Client;


/**
 * 
 * DAO implementation class for the interface corresponding to client entity
 *
 */
@Repository
public class ClientDaoImpl implements ClientDao {

	@PersistenceContext
	private EntityManager em;

	@Override
	public List<Client> getClients()  throws Exception{
		TypedQuery<Client> query = em.createQuery("SELECT e FROM Client e", Client.class);
		return query.getResultList();
	}

	@Override
	public Client getClient(int id)  throws Exception{
		return em.find(Client.class, id);
	}

	@Override
	public void addClient(Client client)  throws Exception{
		em.persist(client);
	}

	@Override
	public void deleteClient(int id)  throws Exception{
		Client e = em.find(Client.class, id);
		em.remove(e);
	}

	@Override
	public void updateClient(Client client)  throws Exception{
		em.merge(client);

	}

}
