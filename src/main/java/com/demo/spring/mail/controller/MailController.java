/**
 * 
 */
package com.demo.spring.mail.controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
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

import com.demo.spring.mail.beans.MailDto;
import com.demo.spring.mail.service.MailService;

/**
 * @author d_farukh
 *
 */
@Controller
@RequestMapping(value="/mails")
public class MailController {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(MailController.class);
	
	@Autowired
	MailService mailServiceImpl;
	
	@RequestMapping(
		method = RequestMethod.GET, 
		value="dashboard")
	public ModelAndView getExtjsApp(HttpServletRequest request, HttpSession session) {
		
		ModelAndView mv = new ModelAndView("mails/dashboard");
		return mv;
		
	}
	
	@RequestMapping(
		method = RequestMethod.GET, 
		value="", 
		produces={"application/json"})
	public @ResponseBody ResponseEntity<List<MailDto>> getInboxMails(HttpServletRequest request, HttpSession session, HttpServletResponse response) {
		
		List<MailDto> receivedMails = mailServiceImpl.getReceivedMails();
		return new ResponseEntity<List<MailDto>>(receivedMails, HttpStatus.OK);
		
	}
	
	@RequestMapping(
		method = RequestMethod.GET, 
		value="sent", 
		produces={"application/json"})
	public @ResponseBody ResponseEntity<List<MailDto>> getSentMails(HttpServletRequest request, HttpSession session, HttpServletResponse response) {
		
		List<MailDto> sentMails = mailServiceImpl.getSentMails();
		return new ResponseEntity<List<MailDto>>(sentMails, HttpStatus.OK);
		
	}
	
	@SuppressWarnings("serial")
	@RequestMapping(value="", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<Map<String, Object>> send(
		//@RequestBody MailDto mailDto,
		@ModelAttribute("MailDto") MailDto mailDto, 	
		HttpServletRequest request, 
		HttpSession session, 
		HttpServletResponse response) {
		
		final boolean sendMail = mailServiceImpl.sendMail(mailDto);
		Map<String, Object> resp = new HashMap<String, Object>(1){{
			put("success", sendMail);
		}};
		return new ResponseEntity<Map<String, Object>>(resp, HttpStatus.OK);
		
	}
	
	/*@ExceptionHandler(value=Exception.class)
	public @ResponseBody ModelAndView handleException(Exception exception, HttpSession session) {
		LOGGER.error("Excpetion: ", exception);
		ModelAndView model = new ModelAndView("error");
		model.addObject("exception", exception);
		return model;
	}*/
	
	@ExceptionHandler(value=Exception.class)
	public @ResponseBody void handleException(HttpServletResponse response, Exception exception, 
		HttpSession session) throws IOException {
		LOGGER.error("Exception: ", exception);
		response.sendError(440, exception.getMessage());
	}
	
}
