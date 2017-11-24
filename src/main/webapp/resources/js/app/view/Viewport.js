Ext.define('EmailApp.view.Viewport', {
	extend : 'Ext.container.Viewport',
	// requires:
	// ['EmailApp.view.mail.MailTabPanel','EmailApp.view.mail.MailGrid'],
	layout : 'border',
	items : [ {
		//title : 'Navigation 1',
		xtype: 'container',
		region : 'north',
		//html : 'Navigation 1',
		height : 37,
		layout : 'hbox',
		padding: '7 5',
		defaults : {
			xtype: 'container',
			//style: 'border:1px solid;',
		},
		items : [ {
			html : '<strong>My Organisation</strong>',
			width : '15%'
		}, {
			xtype: 'headersearchcontainer',
			flex : 1
		}, {
			xtype: 'currentusercontainer',
		} ]
	},/* {
		//title : 'Navigation 2',
		xtype: 'container',
		region : 'north',
		height : 50,
		defaults : {
			height: '100%'
		},
		items : [ {
			xtype: 'container',
			html : 'Coming soon..',
			flex: 1
		} ]
	}, */
	{
		title : 'My Mail',
		region : 'west',
		html : 'Naviagation West',
		width : '15%',
		collapsible : true,
		split : true,
		layout : 'vbox',
		defaults : {
			width : '100%',
			xtype: 'container',
		},
		itemId : 'west-panel',
		items : [ {
			xtype : 'button',
			text : 'Compose',
			itemId : 'btn-mail-compose',
			scale: 'medium',
		}, {
			xtype: 'mailfoldertree',
			flex : 1
		} ]
	}, {
		region : 'center',
		html : 'Center',
		/* layout: 'vbox', */
		defaults : {
			flex : 1,
		/* width: '100%' */
		},
		layout : {
			type : 'vbox',
			align : 'stretch'
		},
		items : [ {
			id : 'elem-center-1',
			//xtype : 'mailtabpanel'
			xtype : 'mailboxcardcontainer'
		}, {
			id : 'elem-center-2',
			html : ''
		} ]
	} ]
});