package com.adobe.theforce.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.adobe.theforce.entity.Admin;
import com.adobe.theforce.service.AdministratorService;


@RestController
public class AdminController {
	
	@Autowired
	private AdministratorService adminService;
	
	
	@RequestMapping(value = "/api/admins",method = RequestMethod.GET)
	public @ResponseBody List<Admin> getAdmins(){
		System.out.println("heasasasfre");
		return adminService.getAdmins();
	}
	
	@RequestMapping(value = "/api/admins",method = RequestMethod.POST)
	public void addAdmin(@RequestBody Admin a){
		System.out.println("hefre");
		adminService.addAdmin(a);
	}
	
	@RequestMapping(value = "/api/admins/{id}",method = RequestMethod.DELETE)
	public void deleteAdmin(@PathVariable("id") int id){
		adminService.deleteAdmin(id);
	}
	
	@RequestMapping(value = "/api/admins/{id}",method = RequestMethod.PUT)
	public void updateAdmin(@PathVariable("id") int id,@RequestBody Admin a){
		adminService.updateAdmin(a);
	}
	
	@RequestMapping(value = "/api/admins/{id}",method = RequestMethod.GET)
	public @ResponseBody Admin getAdmin(@PathVariable("id") int id){
		return adminService.getAdmin(id);
	}
}
