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
	
	public List<Admin> getAdmins(){
		System.out.println("here");
		return adminDao.getAdmins();
	}
	public Admin getAdmin(int id){
		return adminDao.getAdmin(id);
	}
	
	@Transactional
	public void addAdmin(Admin admin){
		adminDao.addAdmin(admin);
	}
	
	@Transactional
	public void deleteAdmin(int id){
		adminDao.deleteAdmin(id);
	}
	
	@Transactional
	public void updateAdmin(Admin admin){
		adminDao.updateAdmin(admin);
	}	

}
