package com.demo.spring.login.service;

import javax.servlet.http.HttpServletRequest;

import com.demo.spring.login.beans.CurrentUser;
import com.demo.spring.login.beans.LoginDto;

public interface LoginService {
	
	public CurrentUser authenticate(LoginDto loginDto);
	
	public CurrentUser getCurrentUser(HttpServletRequest request);

}
