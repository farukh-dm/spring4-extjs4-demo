Ext.define('EmailApp.view.mail.MailBoxCardContainer', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.mailboxcardcontainer',
	layout : 'card',
	activeItem : 0,
	itemId : 'mail-box-card-cont',
	id : 'mail-box-card-cont',
	initComponent : function() {
		// for later use
		this.callParent();
	},
	 defaults: {
        border: false
    },
	items : [ 
    {
		xtype : 'mailtabpanel',
		itemId: 'myMailTabPanel',
		type: 'Inbox'
	}, 
	{
		title : 'Sent',
		xtype : 'mailgrid',
		//store: store,
		itemId: 'mailgrid-sent',
		type: 'Sent',
		
	},
	{
		title : 'Draft',
		xtype : 'mailgrid',
		//store: store,
		itemId: 'mailgrid-draft',
		type: 'Draft',
	}]

});