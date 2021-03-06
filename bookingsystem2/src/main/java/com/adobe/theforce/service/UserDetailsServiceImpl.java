package com.adobe.theforce.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.adobe.theforce.dao.AdminDao;
import com.adobe.theforce.entity.Admin;
import com.adobe.theforce.exceptions.DaoException;

import static java.util.Collections.emptyList;

/**
 * 
 * Service class for handling authentication
 *
 */
@Service
public class UserDetailsServiceImpl implements UserDetailsService {

	@Autowired
	AdminDao adminDao;

	@Override
	public UserDetails loadUserByUsername(String username) {
		Admin admin = null;
		try{
			admin = adminDao.getAdmin(username);
		} catch (Exception e) {
			System.out.println("in UserDetailsService");
		}
		System.out.println("check " + username);
		if (admin == null) {
			throw new UsernameNotFoundException(username);
		}
		return new User(admin.getEmailID(), admin.getPassword(),emptyList());
	}

}
