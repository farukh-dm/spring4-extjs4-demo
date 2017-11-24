package com.demo.spring.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import com.demo.spring.controller.AppConstant;

public class AuthenticationInterceptor extends HandlerInterceptorAdapter {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(AuthenticationInterceptor.class);
	
	/*@SuppressWarnings("serial")
	private static final List<String> byPassActionList = new ArrayList<String>() {{
		add("/login");
		add("/authenticate");
	}};*/
	
	@Override
	public boolean preHandle(HttpServletRequest request,
		HttpServletResponse response, Object handler) throws Exception {
		
		boolean isUserLoggedIn = Boolean.TRUE;
		HttpSession session = null;
		Object currentUser = null; // CurrentUser currentUser = null;
		
		// bypass login|authenticate actions
		/*if(byPassActionList.contains(request.getServletPath())) {
            return isUserLoggedIn;
        }*/
        
		session = request.getSession(false);
		if(null != session) {
			currentUser = session.getAttribute("currentUser");
		}
		
		if(null == currentUser) {
			
			LOGGER.debug("User is not logged in!");
			isUserLoggedIn = Boolean.FALSE;
			
			// If ajax/XMLHttpRequest, render response with error status code that your 
			// ajax callback handler can read & act accordingly.
			String xRequestWithHeader = request.getHeader("X-Requested-With");
			if(null != xRequestWithHeader && "XMLHttpRequest".equals(xRequestWithHeader)) {
				response.sendError(440, "Login Required!");
			} else {
				String referrer = request.getRequestURI();
				if(null == session) {
					session = request.getSession(true);
				}
				session.setAttribute(AppConstant.LABEL_REDIRECT_AFTER_LOGIN_URI, referrer);
				response.sendRedirect(request.getContextPath()+"/login");
			}
			
		}
		
		// This is necessary to stop/continue further execution. 
		return isUserLoggedIn;
	}

}
