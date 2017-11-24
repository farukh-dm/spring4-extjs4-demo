package com.demo.spring.mail.service;

import java.util.List;

import com.demo.spring.mail.beans.MailDto;

public interface MailService {
	
	public List<MailDto> getReceivedMails();
	
	public List<MailDto> getSentMails();
	
	public List<MailDto> getDraftMails();
	
	public boolean sendMail(MailDto mailDto);

}
