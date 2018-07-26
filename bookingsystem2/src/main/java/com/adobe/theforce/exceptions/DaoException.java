package com.adobe.theforce.exceptions;


public class DaoException extends Exception {

	private String url;
	private String message;
	
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	
	public DaoException(String message){
		this.url = "";
		this.message = message;
	}
}
