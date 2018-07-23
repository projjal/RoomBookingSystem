package com.adobe.theforce.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import com.adobe.theforce.entity.Client;

@Repository
public class ClientDaoImpl implements ClientDao {

	@PersistenceContext
	private EntityManager em;
	
	@Override
	public List<Client> getClients() {
		TypedQuery<Client> query = em.createQuery("SELECT e FROM Client e", Client.class);
		return query.getResultList();
	}

	@Override
	public Client getClient(int id) {
		return em.find(Client.class, id);
	}

	@Override
	public void addClient(Client client) {
		em.persist(client);
	}

	@Override
	public void deleteClient(int id) {
		Client e = em.find(Client.class, id);
		em.remove(e);
	}

	@Override
	public void updateClient(Client client) {
		em.merge(client);

	}

}
