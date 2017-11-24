package com.demo.spring.login.beans;

import java.io.Serializable;

public class LoginDto implements Serializable {
	
	private static final long serialVersionUID = 3789452194846034873L;
	
	public String email;
	public String password;
	/**
	 * @return the email
	 */
	public String getEmail() {
		return email;
	}
	/**
	 * @param email the email to set
	 */
	public void setEmail(String email) {
		this.email = email;
	}
	/**
	 * @return the password
	 */
	public String getPassword() {
		return password;
	}
	/**
	 * @param password the password to set
	 */
	public void setPassword(String password) {
		this.password = password;
	}
	
}
