/**
 * 
 */
package com.demo.spring.login.controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.demo.spring.controller.AppConstant;
import com.demo.spring.login.beans.CurrentUser;
import com.demo.spring.login.beans.LoginDto;
import com.demo.spring.login.service.LoginService;

@Controller
public class LoginController {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(LoginController.class);
	
	@Autowired
	LoginService loginServiceImpl;
	
	@RequestMapping(value="login", method = RequestMethod.GET)
	public ModelAndView login(HttpServletRequest request,
		HttpServletResponse response, HttpSession session) {
		
		LOGGER.debug("login: start");
		
		HttpSession currentSession = request.getSession(false);
		if(null != currentSession) {
			// take care of referrer value :)
			Object redirectAfterLoginUri = session.getAttribute(AppConstant.LABEL_REDIRECT_AFTER_LOGIN_URI);
			currentSession.invalidate();
			currentSession = request.getSession(true);
			if(redirectAfterLoginUri != null) {
				currentSession.setAttribute(AppConstant.LABEL_REDIRECT_AFTER_LOGIN_URI, redirectAfterLoginUri);
			}
		}
		ModelAndView mv = new ModelAndView("login/_form");
		
		LOGGER.debug("login: end");
		
		return mv;
		
	}
	
	@RequestMapping(value="authenticate", 
		method = RequestMethod.POST, 
		produces={"application/json", "application/json"})
	public ResponseEntity<Map<String, Object>> authenticate(
		@ModelAttribute("loginDto") LoginDto loginDto,
		HttpServletRequest request, HttpServletResponse response, 
		HttpSession session) {
		
		LOGGER.debug("authenticate: start");
		
		CurrentUser currentUser = loginServiceImpl.authenticate(loginDto);
		StringBuffer redirectUrl = new StringBuffer();
		String referrerUri = null;
		Boolean successFlag = Boolean.FALSE;
		Map<String, Object> responseObj = new HashMap<String, Object>(2);
		if(null != currentUser) {
			
			HttpSession currentSession = request.getSession(false);
			if(null != currentSession) {
				referrerUri = (String) currentSession.getAttribute(AppConstant.LABEL_REDIRECT_AFTER_LOGIN_URI);
				currentSession.invalidate();
			}
			currentSession = request.getSession(true);
			currentSession.setAttribute("currentUser", currentUser);
			
			if(referrerUri == null) {
				redirectUrl.append(request.getContextPath()).append(AppConstant.DEFAULT_URI_AFTER_LOGIN);
			} else {
				redirectUrl.append(referrerUri);
			}
			
		} else {
			redirectUrl.append(request.getContextPath()).append("/login");
		}
		
		successFlag = Boolean.TRUE;
		
		LOGGER.debug("authenticate: end");
		responseObj.put("success", successFlag);
		responseObj.put("redirectUrl", redirectUrl.toString());
		responseObj.put("message", "Logged In");
		
		return new ResponseEntity<Map<String, Object>>(responseObj, HttpStatus.OK);
		
	}
	
	@RequestMapping(value="authenticate", method = RequestMethod.POST)
	public void authenticate2(
		@ModelAttribute("loginDto") LoginDto loginDto,
		HttpServletRequest request, HttpServletResponse response, 
		HttpSession session) throws IOException {
		
		LOGGER.debug("authenticate: start");
		
		CurrentUser currentUser = loginServiceImpl.authenticate(loginDto);
		StringBuffer redirectUrl = new StringBuffer();
		String referrerUri = null;
		
		if(null != currentUser) {
			
			HttpSession currentSession = request.getSession(false);
			if(null != currentSession) {
				referrerUri = (String) currentSession.getAttribute(AppConstant.LABEL_REDIRECT_AFTER_LOGIN_URI);
				currentSession.invalidate();
			}
			currentSession = request.getSession(true);
			currentSession.setAttribute("currentUser", currentUser);
			
			if(referrerUri == null) {
				redirectUrl.append(request.getContextPath()).append("/user/1");
			} else {
				redirectUrl.append(referrerUri);
			}
			
		} else {
			redirectUrl.append(request.getContextPath()).append("/login");
		}
		
		LOGGER.debug("authenticate: end");
		
		response.sendRedirect(redirectUrl.toString());
		
	}
	
	@RequestMapping(value="logout", method = RequestMethod.GET)
	public void logout(HttpServletRequest request,
		HttpServletResponse response) throws IOException {
		
		request.getSession().invalidate();
		response.sendRedirect(request.getContextPath() + "/login");
		
	}
	
	@RequestMapping(
		method = RequestMethod.GET, 
		value="currentUser", 
		produces={"application/xml", "application/json"})
	public @ResponseBody ResponseEntity<CurrentUser> getCurrentUser(HttpServletRequest request, 
		HttpSession session, HttpServletResponse response) {
			
		LOGGER.debug("getCurrentUser : start");
		CurrentUser currentUser = loginServiceImpl.getCurrentUser(request);
		LOGGER.debug("getCurrentUser : end");
		
		return new ResponseEntity<CurrentUser>(currentUser, HttpStatus.OK);		
		
	}
	
	@ExceptionHandler(value=Exception.class)
	public @ResponseBody void handleException(HttpServletResponse response, Exception exception, 
		HttpSession session) throws IOException {
		LOGGER.error("Exception: ", exception);
		response.sendError(440, exception.getMessage());
	}
}
