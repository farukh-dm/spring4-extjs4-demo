Ext.define('EmailApp.view.mail.MailTabPanel', {
	extend : 'Ext.tab.Panel',
	alias : 'widget.mailtabpanel',
	initComponent : function() {
		
		//var store = Ext.create('EmailApp.store.mail.MailStore');
		
		this.items = [ {
			title : 'Primary',
			xtype : 'mailgrid',
			type : 'Primary',
			//store: store,
			itemId: 'mailgrid-primary'
		}, {
			title : 'Social',
			xtype : 'mailgrid',
			//store: store,
			type : 'Social'
		}, {
			title : 'Promotional',
			xtype : 'mailgrid',
			//store: store,
			type : 'Promotional'
		} ];
		
		this.callParent();
		//store.load();
	},
	xtype : 'tabpanel',
	dockedItems : [ {
		dock : 'top',
		items : [ {
			xtype : 'button',
			text : 'Delete'
		} ]
	} ]
	/*items : [ {
		title : 'Primary',
		xtype : 'mailgrid',
		type : 'Primary'
	}, {
		title : 'Social',
		xtype : 'mailgrid',
		type : 'Social'
	}, {
		title : 'Promotion',
		xtype : 'mailgrid',
		type : 'Promotional'
	} ]*/

});