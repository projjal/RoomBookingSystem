package com.adobe.theforce.dao;

import java.util.List;

import com.adobe.theforce.entity.Admin;

public interface AdminDao {
	List<Admin> getAdmins();
	Admin getAdmin(String id);
	void addAdmin(Admin admin);
	void deleteAdmin(String id);
	void updateAdmin(Admin admin);
}
