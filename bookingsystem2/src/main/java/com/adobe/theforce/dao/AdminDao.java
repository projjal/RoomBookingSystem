package com.adobe.theforce.dao;

import java.util.List;

import com.adobe.theforce.entity.Admin;

public interface AdminDao {

	List<Admin> getAdmins() throws Exception;
	Admin getAdmin(int id) throws Exception;
	void addAdmin(Admin admin) throws Exception;
	void deleteAdmin(int id) throws Exception;
	void updateAdmin(Admin admin) throws Exception;
	Admin getAdmin(String id) throws Exception;
}
