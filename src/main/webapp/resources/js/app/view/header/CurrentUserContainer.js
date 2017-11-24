Ext.define('EmailApp.view.header.CurrentUserContainer', {
	extend : 'Ext.container.Container',
	// requires: ['EmailApp.store.mail.MailStore'],
	alias : 'widget.currentusercontainer',
	//layout : 'fit',
	initComponent : function() {
		//this.getEl().update(EmailAppConstant.getCurrentUser().name);
		this.items = [
          {html: "Welcome: <strong>" + EmailAppConstant.getCurrentUser().email + '</strong>'},
          {html: '&nbsp;|&nbsp;'},
          {html: '<a href="'+CONTEXT_PATH+'/logout" id="link-logout">Logout</a>'}
         ];
		this.callParent();
	},
	layout: {
		type: 'hbox',
		
	},
	defaults: {
		xtype: 'container'
	}

});