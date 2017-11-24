Ext.Loader.setConfig({
    enabled: true
});
Ext.Loader.setPath('EmailApp', CONTEXT_PATH+'/resources/js/app');
Ext.application({
  requires: ['EmailApp.common.EmailAppConstant'],
  name: 'EmailApp',
  appFolder: CONTEXT_PATH+'/resources/js/app',
  controllers: ['EmailApp.controller.mail.MailController'],
  launch: function() {
	  
	  Ext.Ajax.request({
	    url: CONTEXT_PATH+'/currentUser.json',
	    params: {
	        // for later use
	    },
	    success: function(response) {
	    	
	        var currentUser = Ext.decode(response.responseText);
	        //EmailApp.common.Constant.setCurrentUser(currentUser);
	        EmailAppConstant.setCurrentUser(currentUser);
	        Ext.create('EmailApp.view.Viewport');
	    },  
	    failure: function(response, opts) {
	        
	    	Ext.Msg.alert('Response Status: ' + response.status, 'Something went wrong!');
	    	
	    }
	});
	
  }
});