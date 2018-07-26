package com.adobe.theforce.web;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.adobe.theforce.entity.Admin;
import com.adobe.theforce.exceptions.DaoException;
import com.adobe.theforce.service.AdminService;
import com.adobe.theforce.service.PublicAdminService;
import com.adobe.theforce.util.PublicAdmin;

/**
 * 
 * Controller class corresponding to admin entity
 *
 */
@RestController
public class AdminController {

	@Autowired
	private AdminService adminService;

	@Autowired
	private PublicAdminService publicAdminService;

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
			throw new DaoException("Unable to get Admins");
		}
	}

	@RequestMapping(value = "/api/admins",method = RequestMethod.GET)
	public @ResponseBody List<PublicAdmin> getAdmins()  throws DaoException{
		try{
			return publicAdminService.getPublicAdminListFromAdmins(adminService.getAdmins());
		} catch (Exception e) {
			throw new DaoException("Unable to get Admins");
		}

	}

	@RequestMapping(value = "/api/admins",method = RequestMethod.POST)
	public void addAdmin(@RequestBody Admin a) throws DaoException{
		try{
			adminService.addAdmin(a);
		} catch (Exception e) {
			throw new DaoException("Unable to Add Admin");
		}
	}

	@RequestMapping(value = "/api/admins/{id}",method = RequestMethod.DELETE)

	public void deleteAdmin(@PathVariable("id") int id) throws DaoException{
		try{
			adminService.deleteAdmin(id);
		} catch (Exception e) {
			throw new DaoException("Unable to Delete Admin with Id = "+ id);
		}
	}

	@RequestMapping(value = "/api/admins/{id}",method = RequestMethod.PUT)
	public void updateAdmin(@PathVariable("id") int id,@RequestBody Admin a) throws DaoException{
		try{
			adminService.updateAdmin(a);
		} catch (Exception e) {
			throw new DaoException("Unable to update Admin with Id = " + id);
		}
	}

	@RequestMapping(value = "/api/admins/{id}",method = RequestMethod.GET)
	public @ResponseBody PublicAdmin getAdmin(@PathVariable("id") int id) throws DaoException{
		try{
			return publicAdminService.getPublicAdminFromAdmin(adminService.getAdmin(id));
		} catch (Exception e) {
			throw new DaoException("Unable to get Admin with Id = " + id);
		}
	}

	@ExceptionHandler(DaoException.class)
	@ResponseBody
	public ResponseEntity handleDaoException(HttpServletRequest request, DaoException ex){
		return new ResponseEntity(HttpStatus.BAD_REQUEST);

	}
}