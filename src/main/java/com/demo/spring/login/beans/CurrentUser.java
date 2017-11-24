package com.demo.spring.login.beans;

import java.io.Serializable;
import java.util.List;

public class CurrentUser implements Serializable {
	
	private static final long serialVersionUID = -4177049527651831589L;
	
	public String name;
	public String email;
	
	// Others
	public List<String> menuItemList;
	
	public CurrentUser() {
		super();
	}

	public CurrentUser(String name, String email) {
		super();
		this.name = name;
		this.email = email;
	}

	/**
	 * @return the name
	 */
	public String getName() {
		return name;
	}

	/**
	 * @param name the name to set
	 */
	public void setName(String name) {
		this.name = name;
	}

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
	 * @return the menuItemList
	 */
	public List<String> getMenuItemList() {
		return menuItemList;
	}

	/**
	 * @param menuItemList the menuItemList to set
	 */
	public void setMenuItemList(List<String> menuItemList) {
		this.menuItemList = menuItemList;
	}
	
}
