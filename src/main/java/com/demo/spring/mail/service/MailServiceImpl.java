package com.demo.spring.mail.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Component;

import com.demo.spring.mail.beans.MailDto;

@Component(value="mailServiceImpl")
public class MailServiceImpl implements MailService {
	
	public static List<MailDto> receivedMailDtoList = null;
	public static List<MailDto> sentMailDtoList = null;
	
	// Static Initialization Block
	static {
		
		receivedMailDtoList = new ArrayList<MailDto>(20);
		sentMailDtoList = new ArrayList<MailDto>(2);
		Date d = new Date();
		
		// Primary
		for(long i=1;i<=6;i++) {
			receivedMailDtoList.add(new MailDto(i, i+"test@test.com", "me@me.com", null, null, i+": Subject", d, i+" content", "Primary", "Inbox", i%2==0));
		}
		
		// Social
		for(long i=7;i<=11;i++) {
			receivedMailDtoList.add(new MailDto(i, i+"test@test.com", "me@me.com", null, null, i+": Subject", d, i+" content", "Social", "Inbox", i%2==0));
		}
		
		// Promotion
		for(long i=12;i<=16;i++) {
			receivedMailDtoList.add(new MailDto(i, i+"test@test.com", "me@me.com", null, null, i+": Subject", d, i+" content", "Promotional", "Inbox", i%2==0));
		}
		
	}

	@Override
	public List<MailDto> getReceivedMails() {
		return receivedMailDtoList;
	}

	@Override
	public List<MailDto> getSentMails() {
		return sentMailDtoList;
	}

	@Override
	public List<MailDto> getDraftMails() {
		return null;
	}

	@Override
	public boolean sendMail(MailDto mailDto) {
		sentMailDtoList.add(mailDto);
		return true;
	}

}
