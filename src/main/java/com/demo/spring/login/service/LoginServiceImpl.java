package com.demo.spring.login.service;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import com.demo.spring.login.beans.CurrentUser;
import com.demo.spring.login.beans.LoginDto;

@Component(value="loginServiceImpl")
public class LoginServiceImpl implements LoginService {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(LoginServiceImpl.class);

	@Override
	public CurrentUser authenticate(LoginDto loginDto) {
		
		LOGGER.debug("authenticate : start");
		
		CurrentUser currentUser = null;
			
		// TODO: Do necessary validation
		currentUser = new CurrentUser("Lorem Ipsum", loginDto.getEmail());
		
		return currentUser;
	}

	@Override
	public CurrentUser getCurrentUser(HttpServletRequest request) {
		
		LOGGER.debug("getCurrentUser : start");
		
		CurrentUser currentUser = null;
		try {
			
			currentUser = (CurrentUser) request.getSession(false).getAttribute("currentUser");
			
		} catch(Exception e) {
			LOGGER.error("Exception in getCurrentUser: ", e);
		}
		return currentUser;
	}

}
