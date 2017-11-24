/**
 * 
 */
package com.demo.spring.controller;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import ch.qos.logback.classic.Level;
import ch.qos.logback.classic.LoggerContext;

import com.demo.spring.Dto.User;
import com.demo.spring.view.excel.UserExcelView;
import com.demo.spring.view.pdf.UserPdfView;

/**
 * @author d_farukh
 *
 */
@Controller
public class HelloWorldController {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(HelloWorldController.class);
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public void index(HttpServletRequest request, HttpSession session, 
		HttpServletResponse response) throws IOException {
		
		response.sendRedirect(request.getContextPath() + AppConstant.DEFAULT_URI_AFTER_LOGIN);
		
	}
	
	@RequestMapping(
		method = RequestMethod.GET, 
		value="/user/1", 
		produces={"application/xml", "application/json"})
	public @ResponseBody ResponseEntity<User> getUser(HttpServletRequest request, HttpSession session, HttpServletResponse response) {
		
		LOGGER.debug("getUser : start");
		
		User user = new User("demo@demo.com", "Demo123");
		return new ResponseEntity<User>(user, HttpStatus.OK);
		
	}
	
	@RequestMapping(
		method = RequestMethod.GET, 
		value="/user/1")
	public ModelAndView getUserWithView(HttpServletRequest request, HttpSession session) {
		
		LOGGER.debug("getUserWithView : start");
		
		User user = new User("demo@demo.com", "Demo123");
		ModelAndView mv = new ModelAndView("user/_user");
		mv.addObject("user", user);
		return mv;
		
	}
	
	// For type .xlsx
	@RequestMapping(
		method = RequestMethod.GET, 
		value="/user/1", 
		produces = {"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"})
	public UserExcelView getUserExcel(HttpServletRequest request, 
		HttpSession session, Model model) {
		
		LOGGER.debug("getUserExcel : start");
		
		User user = new User("demo@demo.com", "Demo123");
		model.addAttribute("user", user);
		return new UserExcelView();
		
	}
	
	// For type .pdf
	@RequestMapping(
		method = RequestMethod.GET, 
		value="/user/1", 
		produces = {"application/pdf"})
	public UserPdfView getUserPdf(HttpServletRequest request, 
		HttpSession session, Model model) {
		
		LOGGER.debug("getUserPdf : start");
		
		User user = new User("demo@demo.com", "Demo123");
		model.addAttribute("user", user);
		return new UserPdfView();
		
	}
	
	@RequestMapping(
		method = RequestMethod.GET, 
		value="/setLogToDebug")
	public void changeLogLevelDebug(HttpServletRequest request, HttpServletResponse response) 
		throws IOException {
		
		LOGGER.debug("changeLogLevelDebug : start");
		LoggerContext loggerContext = (LoggerContext)LoggerFactory.getILoggerFactory();
		Logger rootLogger = loggerContext.getLogger("com.demo.spring.interceptor");
		((ch.qos.logback.classic.Logger) rootLogger).setLevel(Level.INFO);
		
		response.sendRedirect(request.getContextPath() + "/user/1");
		
	}
	
	@ExceptionHandler(value=Exception.class)
	public @ResponseBody ModelAndView handleException(Exception exception, HttpSession session) {
		ModelAndView model = new ModelAndView("error");
		model.addObject("exception", exception);
		return model;
	}
	
}
