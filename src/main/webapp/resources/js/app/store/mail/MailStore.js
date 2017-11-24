Ext.define('EmailApp.store.mail.MailStore', 
	{
  		extend: 'Ext.data.Store',
  		model: 'EmailApp.model.mail.MailModel',
  		
  		proxy: {
  	         type: 'ajax',
  	         url: CONTEXT_PATH+'/mails.json',
  	         reader: {
  	             type: 'json',
  	             root: ''
  	         },
  	         extraParams: {
  	        	 'test' : 'testing..'
  	         }
  	     },
  	     storeId : 'store-mails',
  	     autoLoad: false
  		
  		/*data: [
  		  
  		  {id: 1, from: 'demo1@demo.com', subject: 'Primary Reminder 1',
  		  date: '01/11/2017', content: '****', type: 'Primary', label: 'Inbox', read: true},
  		  
  		  {id: 2, from: 'demo2@demo.com', subject: 'Primary Reminder 2',
		  date: '01/11/2017', content: '####', type: 'Primary', label: 'Inbox', read: false},
		  
		  {id: 3, from: 'test1@demo.com', subject: 'Social Reminder 1',
  		  date: '01/11/2017', content: '****', type: 'Social', label: 'Inbox', read: true},
  		  
  		  {id: 4, from: 'test2@demo.com', subject: 'Social Reminder 2',
		  date: '01/11/2017', content: '####', type: 'Social', label: 'Inbox', read: false},
	  	
		  {id: 5, from: 'temp1@demo.com', subject: 'Promotional Reminder 1',
  		  date: '01/11/2017', content: '****', type: 'Promotional', label: 'Inbox', read: true},
  		  
  		  {id: 6, from: 'temp2@demo.com', subject: 'Promotional Reminder 2',
		  date: '01/11/2017', content: '####', type: 'Promotional', label: 'Inbox', read: false}
		  
	    ]*/
	}
);