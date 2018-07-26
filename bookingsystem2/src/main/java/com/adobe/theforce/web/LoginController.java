package com.adobe.theforce.web;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.adobe.theforce.exceptions.DaoException;

/**
 * 
 * Controller class corresponding to login
 *
 */
@RestController
public class LoginController {

	@RequestMapping(value = "/api/loginsuccess",method = RequestMethod.GET)
	@ResponseBody
	public ResponseEntity loginSuccess() throws DaoException{
		return new ResponseEntity(HttpStatus.OK);
	}

	@RequestMapping(value = "/api/logoutsuccess",method = RequestMethod.GET)
	@ResponseBody
	public ResponseEntity logoutSuccess() throws DaoException{
		//		request.getSession().invalidate();
		return new ResponseEntity(HttpStatus.OK);
	}

}
