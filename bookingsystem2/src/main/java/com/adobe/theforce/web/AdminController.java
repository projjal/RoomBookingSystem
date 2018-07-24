package com.adobe.theforce.web;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.adobe.theforce.dao.DaoException;
import com.adobe.theforce.entity.Admin;
import com.adobe.theforce.entity.ExceptionJSONInfo;
import com.adobe.theforce.service.AdminService;


@RestController
public class AdminController {
	
	@Autowired
	private AdminService adminService;
	
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	@RequestMapping(value = "/api/admins/signup",method = RequestMethod.POST)
	public void signUp(@RequestBody Admin user) throws DaoException {

		String emailId = user.getEmailID();
		Admin temp = null;
		try{
		temp = adminService.getAdmin(emailId);
		}catch(Exception e){
			
		}
		if(temp != null){
			throw new DaoException("Admin EmailId Already Exist");
		}
		user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
		try{
		adminService.addAdmin(user);
		} catch (Exception e) {
		// TODO Auto-generated catch block
		throw new DaoException("Unable to get Admins");
		}
	}
	
	@RequestMapping(value = "/api/admins",method = RequestMethod.GET)
	public @ResponseBody List<Admin> getAdmins()  throws DaoException{
		System.out.println("heasasasfre");
		try{
		return adminService.getAdmins();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw new DaoException("Unable to get Admins");
		}
		
	}
	
	@RequestMapping(value = "/api/admins",method = RequestMethod.POST)
	public void addAdmin(@RequestBody Admin a) throws DaoException{
		try{
		adminService.addAdmin(a);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw new DaoException("Unable to Add Admin");
		}
	}
	
	@RequestMapping(value = "/api/admins/{id}",method = RequestMethod.DELETE)

	public void deleteAdmin(@PathVariable("id") int id) throws DaoException{
		try{
		adminService.deleteAdmin(id);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw new DaoException("Unable to Delete Admin with Id = "+ id);
		}
	}
	
	@RequestMapping(value = "/api/admins/{id}",method = RequestMethod.PUT)
	public void updateAdmin(@PathVariable("id") int id,@RequestBody Admin a) throws DaoException{
		try{
		adminService.updateAdmin(a);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw new DaoException("Unable to update Admin with Id = " + id);
		}
	}
	
	@RequestMapping(value = "/api/admins/{id}",method = RequestMethod.GET)
	public @ResponseBody Admin getAdmin(@PathVariable("id") int id) throws DaoException{
		try{
		return adminService.getAdmin(id);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw new DaoException("Unable to get Admin with Id = " + id);
		}
	}
	
	@ExceptionHandler(DaoException.class)
	public @ResponseBody ExceptionJSONInfo handleDaoException(HttpServletRequest request, DaoException ex){
		
		ExceptionJSONInfo response = new ExceptionJSONInfo();
		response.setMessage(ex.getMessage());
		
		return response;
	}
}