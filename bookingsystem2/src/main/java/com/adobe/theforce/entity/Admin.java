package com.adobe.theforce.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name ="admins")
public class Admin {
	
	@Id
	private String emailID;
	
	private String name;
	
	private String mobileNumber;
	
	private String address;
	
	private String password;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmailID() {
		return emailID;
	}

	public void setEmailID(String emailID) {
		this.emailID = emailID;
	}

	public String getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	
	public Admin() {
		super();
	}

	public Admin(int id, String name, String emailID, String mobileNumber, String address, String password) {
		this.name = name;
		this.emailID = emailID;
		this.mobileNumber = mobileNumber;
		this.address = address;
		this.password = password;
	}
	
}
