package com.adobe.theforce.dao;

import java.util.List;

import com.adobe.theforce.entity.Admin;

public interface AdminDao {
<<<<<<< Updated upstream
	List<Admin> getAdmins();
	Admin getAdmin(String id);
	void addAdmin(Admin admin);
	void deleteAdmin(String id);
	void updateAdmin(Admin admin);
=======
	List<Admin> getAdmins() throws Exception;
	Admin getAdmin(int id) throws Exception;
	void addAdmin(Admin admin) throws Exception;
	void deleteAdmin(int id) throws Exception;
	void updateAdmin(Admin admin) throws Exception;
>>>>>>> Stashed changes
}
