package com.adobe.theforce.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.adobe.theforce.dao.AdminDao;
import com.adobe.theforce.entity.Admin;


@Service
public class AdminService {
	@Autowired
	private AdminDao adminDao;
	
	public List<Admin> getAdmins()  throws Exception{
		System.out.println("here");
		return adminDao.getAdmins();
	}
	public Admin getAdmin(int id)  throws Exception{
		return adminDao.getAdmin(id);
	}
	
	@Transactional
	public void addAdmin(Admin admin)  throws Exception{
		adminDao.addAdmin(admin);
	}
	
	@Transactional
	public void deleteAdmin(int id)  throws Exception{
		adminDao.deleteAdmin(id);
	}
	
	@Transactional
	public void updateAdmin(Admin admin)  throws Exception{
		adminDao.updateAdmin(admin);
	}	
	
	@Transactional
	public Admin getAdmin(String id) throws Exception{
		return adminDao.getAdmin(id);
	}

}
