package com.adobe.theforce.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value=HttpStatus.NOT_FOUND, reason="Room Not Found") //404
public class RoomNotFoundException extends Exception {

	private static final long serialVersionUID = -3332292346834265371L;

	public RoomNotFoundException(int id){
		super("RoomNotFoundException with id="+id);
	}
}