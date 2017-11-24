Ext.define('EmailApp.view.login.LoginViewport', {
	extend : 'Ext.container.Viewport',
	layout : 'border',
	items : [ {
		xtype: 'container',
		region : 'north',
		height : 25,
		layout : 'hbox',
		padding: 5,
		defaults : {
			xtype: 'container',
			height: '100%'
		},
		items : [ {
			html : '<strong>Email Application Demonstration using Extjs 4</strong>',
			width : '50%'
		}]
	}, 
	{
		region : 'center',
		defaults : {
			flex : 1,
			border: 0
		},
		layout : {
			type : 'vbox',
			align : 'stretch'
		},
		items : [ {
			id : 'elem-center-1',
			xtype : 'loginform'
		}, {
			id : 'elem-center-2',
			html : ''
		} ]
	} ]
});