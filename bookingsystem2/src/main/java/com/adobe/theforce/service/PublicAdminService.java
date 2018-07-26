package com.adobe.theforce.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.adobe.theforce.entity.Admin;
import com.adobe.theforce.util.PublicAdmin;

@Service
public class PublicAdminService {
	
	public PublicAdmin getPublicAdminFromAdmin(Admin a) {
		PublicAdmin pa = new PublicAdmin(a);
		return pa;
	}
	
	public List<PublicAdmin> getPublicAdminListFromAdmins(List<Admin> adminList){
		List<PublicAdmin> list = new ArrayList<PublicAdmin>();
		for (Admin admin : adminList) {
			list.add(new PublicAdmin(admin));
		}
		return list;
		
	}
}
